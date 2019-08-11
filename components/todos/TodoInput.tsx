import TodoStore from "@stores/TodoStore";
import { inject } from "mobx-react";
import * as React from "react";
import { Form } from "react-bootstrap";

interface IProps {
  todos?: TodoStore
}

@inject('todos')
class TodoInput extends React.Component<IProps> {

  constructor (props) {
    super(props);
    this.props.todos.todoInput = React.createRef<HTMLInputElement>()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.todos.addTodo()
    e.target.reset()
  };

  render () {


    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <Form.Group>
          <Form.Control ref={this.props.todos.todoInput} placeholder="I need to..." />
        </Form.Group>
      </form>
    )
  }

}

export default TodoInput
