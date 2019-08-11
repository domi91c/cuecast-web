import { Task } from "@types";
import { loadTasks } from "@utils/sample-api";
import { action, observable } from "mobx";

class TodoStore {
  @observable todoInput;
  @observable tasks: Task[] = loadTasks;
  @observable nextTaskId: number = 5;

  constructor () {
  }

  @action addTodo = () => {
    this.nextTaskId++;
    this.tasks.push({
      id: this.nextTaskId,
      title: this.todoInput.current.value,
      completed: false,
      editing: false,
    });
  }

  @action removeTodo = task => {
    let index = this.findIndex(task);
    this.tasks.splice(index, 1)
  }

  @action toggleCompletion = task => {
    let thisTask = this.find(task)
    thisTask.completed = !thisTask.completed
    console.log('done')
  }

  private find (task) {
    return this.tasks.find(t => t.id === task.id);
  }

  private findIndex (task) {
    return this.tasks.findIndex(t => t.id === task.id);
  }
}

export default TodoStore


/*
import { FormEvent, FormEventHandler, SyntheticEvent } from "react";
import * as React from "react";
import { Task } from "@types";
import { observable, action, computed } from 'mobx';

export interface ITodoStore {
  addTodo(event: Event): void;
}

class TodoStore implements ITodoStore {
  @observable todoInput: React.RefObject<HTMLInputElement> = React.createRef()
  @observable nextTaskId = 3;
  @observable todos: Task[] = [
    {
      'index': 1,
      'title': 'Finish MobX Screencast',
      'completed': false,
      'editing': false,
    },
    {
      'index': 2,
      'title': 'Take over MobX world',
      'completed': false,
      'editing': false,
    },
  ];

  @action addTodo(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      if (this.todoInput.current) {
        this.todos.push({
          title: this.todoInput.current.value,
          index: this.nextTaskId,
          completed: false,
          editing: false,
        });
      }
    }
  }
}


export default TodoStore
*/
