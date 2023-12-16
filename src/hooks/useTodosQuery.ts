import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTodos } from "../services/todos";
import { useToast } from "@chakra-ui/react";



export const useTodosQuery = () => {
  const toast = useToast();
  return useQuery({
    queryFn: () => fetchTodos("all"),
    queryKey: ["todos", "all"],
    onError: (err:Error) => {
      // if (err instanceof Error)
        toast({
          status: "error",
          title: err.message,
          isClosable: true,
          position: "top-right",
        });
    },
  });
};
