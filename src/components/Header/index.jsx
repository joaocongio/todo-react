import { useState, useContext } from "react";
import { HeaderContainer, Search } from "./style";

import { TodoContext } from "../../Context/TodoContext";

export default function Header() {
  const { saveTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState(null);

  function handleSubmitTodo(e) {
    e.preventDefault();
    saveTodo(todo);
  }

  function handleInputChange(e) {
    setTodo({
      ...todo,
      title: e.target.value,
    });
  }

  return (
    <HeaderContainer>
      <h1>Minhas tarefas</h1>
      <Search>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleSubmitTodo}>
          Adicionar
        </button>
      </Search>
    </HeaderContainer>
  );
}
