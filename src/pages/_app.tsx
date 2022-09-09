import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppProps } from "next/app";

import { AuthProvider } from "../contexts/AuthContext";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { queryClient } from "../services/queryClient";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </SidebarDrawerProvider>
        </QueryClientProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
