import { Task } from "@types";
import * as React from "react";
import { Form } from "react-bootstrap";

interface ITodoInputProps {
}

const TodoInput: React.FC<ITodoInputProps> = ({}) => {

  return (
    <Form.Group>
      <Form.Control placeholder="I need to..." />
    </Form.Group>
  )
}

export default TodoInput
