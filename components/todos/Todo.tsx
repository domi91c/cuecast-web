import TodoStore from "@stores/TodoStore";
import { Task } from "@types";
import { inject, observer } from "mobx-react";
import * as React from "react";
import { ListGroup } from "react-bootstrap";


interface ITaskProps {
  task: Task
  todos?: TodoStore
}

@inject('todos') @observer
class Todo extends React.Component<ITaskProps> {
  constructor (props) {
    super(props)
  }

  render () {
    let { task } = this.props

    let handleRemove = e => {
      e.stopPropagation();
      this.props.todos.removeTodo(task)
    };

    return (
      <ListGroup.Item as="li"
                      className="d-flex"
                      key={task.id}
                      onClick={() => this.props.todos.toggleCompletion(task)}>
        <p className={task.completed ? 'completed-task' : ''}>
          {task.title}
        </p>
        <button className="btn btn-danger ml-auto"
                onClick={handleRemove}>
          X
        </button>
      </ListGroup.Item>
    )
  }

}


export default Todo;
