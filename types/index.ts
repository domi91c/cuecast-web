import TodoStore from "@stores/TodoStore";
import ViewStore from "@stores/ViewStore";

export type User = {
  id: number
  name: string
}

export type Task = {
  id: number;
  title: string
  completed: boolean
  editing: boolean
}

export interface Stores {
  todos: TodoStore
  views: ViewStore
}

