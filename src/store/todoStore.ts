import { create } from 'zustand';

export interface TodoItem {
  id: string;
  value: string;
  checked: boolean;
}

interface TodoState {
  todos: TodoItem[];
  toggleCheck: (id: string) => void;
  updateValue: (id: string, value: string) => void;
  saveTodos: () => void;
}

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: Array.from({ length: 12 }, () => ({
    id: Date.now().toString() + Math.random().toString(36).slice(2),
    value: '',
    checked: false,
  })),
  toggleCheck: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      ),
    })),
  updateValue: (id, value) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, value } : todo
      ),
    })),
  saveTodos: () => {
    //todo
  },
}));
