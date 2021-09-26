import styled from 'styled-components'

export const ListItem = (props) => {

  const onDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    props.handleDragItem(props.item)
  }

  return (
    <Container>
      <Drag draggable={true} onDragStart={onDragStart}>
        <Text >{props.item.name}</Text>
      </Drag>
    </Container>
  );
};


const Container = styled.li`
    list-style: none;
    border-radius: 4px;
    border: 3px solid #000;
    height: 80px;
    width: 246px;
    margin: 25px 0;
    background-color: #fff;
`;

const Text = styled.span`
    max-width: 100%;
    word-break: break-all;
    color: #000;
`

const Drag = styled.div`
  height: 100%;
  width: 100%;
  cursor: grab;
`
