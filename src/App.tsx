import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import PreviousTodoList from "./components/PreviusTodoList";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  body {
    font-family: 'Press Start 2P', cursive, sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
          <Header />
          <Flex>
          <TodoList />
          <PreviousTodoList />
          </Flex>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: #b6ccb1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  height: 100vh;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  `