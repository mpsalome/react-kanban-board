import './App.css';
import { TodoList } from './components/TodoList';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/lightTheme';
import { darkTheme } from './styles/themes/darkTheme';
import GlobalStyles from './styles/globalStyles';
import { useState } from 'react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ChangeTheme onClick={handleThemeChange}>
        <div className={isDarkTheme ? 'darkTheme' : 'lightTheme'}></div>
      </ChangeTheme>
      <main>
        <Title>Custom TODO-List</Title>
        <TodoList />
      </main>
    </ThemeProvider>
  );
}

export default App;

const Title = styled.h1`
  text-align: center;
  font-family: 'Fredoka One', cursive;
  font-weight: 400;
  margin-top: 0;
`;

const ChangeTheme = styled.button`
  align-items: center;
  background-color: rgb(45, 45, 45);
  border-radius: 2.4rem;
  cursor: pointer;
  display: inline-flex;
  height: 2.4rem;
  justify-content: space-between;
  padding-left: 2px;
  padding-right: 2px;
  position: relative;
  width: 60px;
  border: 0;
  margin: 10px 0 0 10px;
  font-size: 20px;
  left: 0;

  :before {
    content: '🌝';
  }

  :after {
    content: '🌞';
  }

  div {
    background-color: rgb(241, 241, 241);
    border: 2px solid rgb(24, 120, 136);
    border-radius: 50%;
    height: 22px;
    position: absolute;
    top: 7px;
    transition: transform 0.25s ease 0s;
    width: 23px;
    z-index: 5;

    &.darkTheme {
      transform: translateX(100%);
    }
    &.lightTheme {
      transform: translateX(0px);
    }
  }
`;
