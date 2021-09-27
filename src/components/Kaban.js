// import { useState } from 'react';
import { Column } from './Column';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useState } from 'react'

export const Kanban = () => {
  const items = useSelector((state) => state.items.tasks);
  const [dragItem, setDragItem] = useState({})

  const handleDragItem = (item) => {
    setDragItem(item)
  }

  return (
    <TodoContainer>
      <ColumnsWrapper>
        <Column
          onItemDrag={handleDragItem}
          dragItem={dragItem}
          items={items.filter((item) => item.type === 'todo' )}
          title={'To-do'}
          type={'todo'}
          hasAddListItem={true} 
        />
        <Column
          onItemDrag={handleDragItem}
          dragItem={dragItem}
          items={items.filter((item) => item.type === 'inprogress' )}
          title={'In Progress'}
          type={'inprogress'}
        />
        <Column
          onItemDrag={handleDragItem}
          dragItem={dragItem}
          items={items.filter((item) => item.type === 'done' )}
          title={'Done'}
          type={'done'}
        />
      </ColumnsWrapper>
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

const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
