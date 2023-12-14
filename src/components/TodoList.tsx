import { List, Spinner } from "@chakra-ui/react";
import { TodoItem } from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../services/todos";

const TodoList = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["todos", "all"],
    queryFn: () => fetchTodos("all"),
  });

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

  return (
    <List>
      {isSuccess && data.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    </List>
  );
};

export { TodoList };
