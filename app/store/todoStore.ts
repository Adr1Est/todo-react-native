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
    { id: 3, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 4, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 5, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 6, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 7, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 8, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 9, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 10, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 11, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 12, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 13, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 14, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 15, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 16, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 17, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
    { id: 18, task: "Ir al gimnasio a las 18:30h de la tarde!", isDone: false},
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