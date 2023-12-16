import { Checkbox, ListItem, Stack } from '@chakra-ui/react';
import { Todo } from '../types/todo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleTodoStatus } from '../services/todos';

const TodoItem = ({ completed, id, title }: Todo) => {

const client = useQueryClient();

const{mutate}=useMutation({
  mutationFn:()=>toggleTodoStatus(id, !completed),
  onSuccess:()=> client.invalidateQueries(['todos'])
})

  return (
    <ListItem>
      <Stack spacing={4} direction="row" onClick={()=>mutate()} >
        <Checkbox isChecked={completed}>{title}</Checkbox>
      </Stack>
    </ListItem>
  );
};

export { TodoItem };