import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { createContext, useState } from 'react';

import { AuthContextData, AuthProviderProps, SignInCredentials, User } from '../@types/types';
import { api } from '../services/api';

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

      const { token, nome, email, idUsuario } = response.data;

      setCookie(undefined, "findhealth.token", token, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });

      setUser({
        login,
        nome,
        email,
        idUsuario,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>{children}</AuthContext.Provider>;
}
