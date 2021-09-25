// import { useState } from 'react';
import { Column } from './Column';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const Kanban = () => {
  const items = useSelector((state) => state.items.tasks);
  //   const [taskValue, setTaskValue] = useState('');

  return (
    <TodoContainer>
      <ColumWrapper>
        <Column
          items={items.filter((item) => item.type === 'todo' )}
          title={'To-do'}
        />
        <Column
          items={items.filter((item) => item.type === 'inprogress' )}
          title={'In Progress'}
        />
        <Column
          items={items.filter((item) => item.type === 'done' )}
          title={'Done'}
        />
      </ColumWrapper>
    </TodoContainer>
  );
};

const TodoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-weight: 400;
`;

const ColumWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

// const AddTodoContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
// const NewTaskInput = styled.input`
//   box-sizing: border-box;
//   display: block;
//   border: 3px solid #000;
//   color: #000;
//   background: transparent;
//   border-radius: 4px;
//   height: 40px;
//   width: 50vw;
//   padding: 1vw;
//   font-weight: 600;
//   font-size: 14px;
//   text-align: center;
//   background-color: #fff;
//   min-width: 258px;
// `;
// const AddButton = styled.button`
//   background-color: ${(props) => props.theme.accent};
//   color: #000;
//   padding: 5px;
//   border-radius: 4px;
//   margin: 30px 0 10px 0;
//   width: 153px;
//   height: 42px;
//   text-transform: uppercase;
//   font-weight: 900;
//   border: 3px solid #000;

//   :hover {
//     background-color: ${(props) => props.theme.darkAccent};
//     cursor: pointer;
//   }

//   :active {
//     background-color: #000;
//     color: #fff;
//   }
// `;
