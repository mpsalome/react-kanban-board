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
  padding: 0;
  margin: 0 20px;
`;

const Title = styled.p`
  font-family: 'Fredoka One', cursive;
  font-weight: 400;
`;
