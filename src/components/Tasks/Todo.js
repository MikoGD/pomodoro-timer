import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";

function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    props.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.todos.map((todo, index) => (
    <Box
      {...props.theme.styles.bgNoHover}
      w="100%"
      borderRadius="4px"
      p="16px"
      my="10px"
      key={index}>
      <Flex>
        <Box
          w="80%"
          flex="1"
          key={
            todo.id
          } /*</Flex>onClick={"text-decoration: line-through"
  "opacity: 0.4"}*/
        >
          {todo.text}
        </Box>
        <Box w="20%">
          <DeleteIcon
            boxSize="5"
            mx="9px"
            onClick={() => props.removeTodo(todo.id)}
          />
          <EditIcon
            boxSize="5"
            mx="9px"
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          />
        </Box>
      </Flex>
    </Box>
  ));
}

export default Todo;
