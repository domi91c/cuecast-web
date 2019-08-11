import Todo from "@components/todos/Todo";
import TodoInput from "@components/todos/TodoInput";
import TodoStore from "@stores/TodoStore";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { Card, ListGroup } from "react-bootstrap";


interface ITodoListProps {
  todos?: TodoStore
}

@inject('todos') @observer
class TodoList extends React.Component<ITodoListProps> {

  render () {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Todo List</Card.Title>
          <ListGroup as="ul">
            {this.listTodos()}
          </ListGroup>
          <hr />
        </Card.Body>
        <Card.Footer>
          <TodoInput />
        </Card.Footer>
      </Card>
    )
  }

  private listTodos = () => (
    this.props.todos.tasks.map(
      task => <Todo task={task} />
    )
  );

}

export default TodoList

