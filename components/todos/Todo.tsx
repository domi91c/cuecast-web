import * as React from "react";
import { Task } from "interfaces";


interface ITaskProps {
  task: Task
}

export const Todo: React.FC<ITaskProps> = ({task}) => (
  <div className="card">
    <div className="title">{task.title}</div>
    <div className="body">{task.description}</div>
  </div>
)
