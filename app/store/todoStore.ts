import { create } from 'zustand';

interface Todo {
  id: number;
  task: string;
  isDone: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (task: string) => void;
  // toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  reset: () => void;
}

export const useTodoStore = create<TodoStore>((set, get, store) => ({
  todos: [
    { id: 1, task: "Hacer la comida antes de la 13:00h", isDone: true},
    { id: 2, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
  ],
  addTodo: (task: string) => set((state) => ({
    todos: [...state.todos, {
      id: state.todos.length + 1,
      task: task,
      isDone: false,
    }]
  })),
  deleteTodo: (id: number) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  reset: () => set(store.getInitialState()),
}));