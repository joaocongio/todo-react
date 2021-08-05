import { TodoProvider } from "../../Context/TodoContext";
import { Main, Container } from "./style";

import Header from "../Header";

import Todo from "../Todo";

export default function App() {
  return (
    <TodoProvider>
      <Main>
        <Container>
          <Header />
          <Todo />
        </Container>
      </Main>
    </TodoProvider>
  );
}
