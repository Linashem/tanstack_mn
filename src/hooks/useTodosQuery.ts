import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTodos } from "../services/todos";
// import { useToast } from "@chakra-ui/react";
import { TodoState } from "../types/todo";

export const useTodosQuery = (state: TodoState) => {
  // const toast = useToast();
  return useQuery({
    queryFn: () => fetchTodos(state),
    queryKey: ["todos", state],
    staleTime: 1000*20,

    // onError: (err:Error) => {
    //   // if (err instanceof Error)
    //     toast({
    //       status: "error",
    //       title: err.message,
    //       isClosable: true,
    //       position: "top-right",
    //     });
    // },
  });
};
