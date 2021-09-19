import styled from 'styled-components'

export const TodoListItem = (props) => {
  return (
    <Container>
      <Label>
        <CheckItem type="checkbox" checked={props.item.isCompleted} onChange={(e) => props.onTaskChanged(e, props.item)}/>
        <Text>{props.item.name}</Text>
        <CheckIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"/></CheckIcon>
      </Label>
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
    box-shadow: 0.5rem 0.5rem 0 #000;
`;

const Text = styled.span`
    max-width: 100%;
    word-break: break-all;
`

const Label = styled.label`
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const CheckIcon = styled.svg`
 display: none;
`

const CheckItem = styled.input`
    display: none;

    :checked + span {
      color: #a2a2a2;
      text-decoration: line-through;
      ~ svg {
        display: block;
        fill: #0da90d;
      }
    }
`