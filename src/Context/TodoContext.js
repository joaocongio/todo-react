import { createContext, useState } from "react";

export const TodoContext = createContext()

export function TodoProvider({ children }) {

  const [todos, setTodos] = useState([])

  function saveTodo(todo) {
    const newTodo = {
      id: Math.random(),
      title: todo.title,
      done: false,
    }

    setTodos([...todos, newTodo])
  }

  function doneTodo(todoIndex) {
    const todo = todos[todoIndex]
    todo.done = !todo.done

    setTodos([...todos])
  }

  return(
    <TodoContext.Provider value={{ todos, saveTodo, doneTodo }}>
      {children}
    </TodoContext.Provider>
  )
}