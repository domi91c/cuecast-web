import * as React from "react";
import Todo from "@components/todos/Todo";
import TodoInput from "@components/todos/TodoInput";
import { Task } from "@types";
import { Card, ListGroup } from "react-bootstrap";

interface ITodoListProps {
  tasks: Task[]
}

const TodoList: React.FC<ITodoListProps> = ({tasks}) => {

  const listItems = tasks.map((task: Task) =>
    <Todo task={task} key={task.index} />
  );

  return (
    <Card style={{width: '18rem'}}>
      <Card.Body>
        <Card.Title>Todo List</Card.Title>
        <ListGroup as="ul">
          {listItems}
        </ListGroup>
        <hr />
      </Card.Body>
      <Card.Footer>
        <TodoInput />
      </Card.Footer>
    </Card>
  )
}

export default TodoList
