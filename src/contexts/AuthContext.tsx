import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/api";

interface User {
  login: string;
}

interface SignInCredentials {
  login: string;
  senha: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const router = useRouter();

  // se tem usuário, então está autenticado
  const isAuthenticated = !!user;

  async function signIn({ login, senha }: SignInCredentials) {
    try {
      const response = await api.post("autenticacao", {
        login,
        senha,
      });

      // salvando token nos cookies do navegador usando a lib "nookies"
      const { token } = response.data;
      setCookie(undefined, "findhealth.token", token, {
        maxAge: 30 * 24 * 60 * 60, // 30 dias
        path: "/", // para toda a aplicação
      });

      setUser({
        login,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      router.push("/");
    } catch (error) {
      alert("Erro ao fazer login");
    }
  }

  return <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>{children}</AuthContext.Provider>;
}
