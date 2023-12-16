import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <App />
        <ReactQueryDevtools  initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  
);
