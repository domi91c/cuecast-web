import { newTodo, removeTodo } from "@actions/todosActions";
import { store } from "next/dist/build/output/store";
import * as React from "react";
import { Task } from "@types";
import { Button, ListGroup } from "react-bootstrap";


interface ITaskProps {
  task: Task
}

const Todo: React.FC<ITaskProps> = ({task}) => (
  <ListGroup.Item as="li" className="d-flex">
    <div className=""> {task.title} </div>
    <div className="ml-auto"><Button onClick={() => removeTodo(task.index)}>X</Button></div>
  </ListGroup.Item>
)


export default Todo;
