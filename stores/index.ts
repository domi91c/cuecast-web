import { Stores } from "@types";
import TodoStore from './TodoStore';
import ViewStore from './ViewStore';

export const stores: Stores = {
  todos: new TodoStore(),
  views: new ViewStore()
}
