import { NEW_TODO, REMOVE_TODO } from "@constants";
import { Task } from "@types";

let nextTodoIndex: number = 0

export const newTodo = (title: string) => ({
  type: 'ADD_TODO',
  index: nextTodoIndex++,
  title
})

export const removeTodo = (index: number) => ({
  type: 'REMOVE_TODO',
  index
})
