import styled from 'styled-components';

export const ListItem = (props) => {
  const onDragStart = (e) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    e.target.parentNode.classList.add('dragging');
    props.handleDragItem(props.item);
  };

  const onDragEnd = (e) => {
    e.target.parentNode.classList.remove('dragging');
  };

  return (
    <Container>
      <Drag draggable={true} onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Text>{props.item.name}</Text>
      </Drag>
    </Container>
  );
};

const Container = styled.li`
  list-style: none;
  border-radius: 10px;
  border: 3px solid #ccc;
  height: 80px;
  width: 246px;
  margin: 25px auto;
  background-color: #fff;
`;

const Text = styled.span`
  max-width: 100%;
  word-break: break-all;
  color: #000;
`;

const Drag = styled.div`
  height: 100%;
  width: 100%;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;
