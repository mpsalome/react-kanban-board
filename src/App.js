import './App.css';
import { TodoList } from './components/TodoList';
import styled from 'styled-components'

function App() {
  return (
   <main>
     <Title>Custom TODO-List</Title>
     <TodoList />
   </main>
  );
}

export default App;

const Title = styled.h1`
  text-align: center;
  font-family: 'Fredoka One', cursive;
  font-weight: 400;
`;