import { ListItem } from './ListItem';
import styled from 'styled-components';

export const Column = (props) => {
  return (
    <List>
      <Title>{props.title}</Title>
      {props.items.map((task) => (
        <ListItem key={task.name} item={task} />
      ))}
    </List>
  );
};

const List = styled.ul`
  padding: 10px;
  border-radius: 10px;
  margin: 20px;
  background: ${(props) => props.theme.columnBackground};
`;

const Title = styled.p`
  font-family: 'Fredoka One', cursive;
  font-weight: 400;
`;
