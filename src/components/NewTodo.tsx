import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../services/todos";

const NewTodo = () => {
  const [title, setTitle] = useState("");
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["todos", "all"] });
    },
  });

  const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title) {
      mutate(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={submit}>
      <Stack direction="row">
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="new todo..."
        />
        <Button type="submit">Add todo</Button>
      </Stack>
    </form>
  );
};

export { NewTodo };
