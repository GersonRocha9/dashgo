import { createContext, ReactNode } from "react";

import { api } from "../services/api";

interface SignInCredentials {
  login: string;
  senha: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function signIn({ login, senha }: SignInCredentials) {
    try {
      const response = await api.post("autenticacao", {
        login,
        senha,
      });
    } catch (error) {
      alert("Erro ao fazer login");
    }
  }

  return <AuthContext.Provider value={{ signIn, isAuthenticated }}>{children}</AuthContext.Provider>;
}
