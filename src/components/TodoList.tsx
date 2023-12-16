import { List, Spinner, useToast } from "@chakra-ui/react";
import { TodoItem } from "./TodoItem";
import { useTodosQuery } from "../hooks/useTodosQuery";

const TodoList = () => {
  const { data, isLoading, isSuccess, error  } = useTodosQuery()
  
  const toast = useToast();

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  if(error) return  toast({
    status: "error",
    title: error.message,
    isClosable: true,
    position: "top-right",
  }); 
  return (
    <List>
      {isSuccess && data.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    </List>
  );
};

export { TodoList };
