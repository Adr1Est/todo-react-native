import { create } from 'zustand';

interface Todo {
  id: number;
  task: string;
  isDone: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (task: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  reset: () => void;
}

export const useTodoStore = create<TodoStore>((set, get, store) => ({
  todos: [],
  addTodo: (task: string) => set((state) => ({
    todos: [...state.todos, {
      id: state.todos.length + 1,
      task: task,
      isDone: false,
    }]
  })),
  toggleTodo: (id: number) => set((state) => ({
    todos: state.todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
  })),
  deleteTodo: (id: number) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  reset: () => set(store.getInitialState()),
}));