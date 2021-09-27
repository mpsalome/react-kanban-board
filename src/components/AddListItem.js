import styled from 'styled-components'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTask } from "../store/actions/tasks";

export const AddListItem = (props) => {

  const [taskValue, setTaskValue] = useState('')
  const dispatch = useDispatch()

  const  handleClick = () => {
    if(!taskValue) return
    let newTask = {id: Math.random().toString(36).slice(2), name: taskValue, type: props.type}
    dispatch(addTask(newTask))
    setTaskValue('')
  }

  return (
    <Container>
        <InputTask type="text" placeholder="Add a new task" value={taskValue} onChange={(e) => setTaskValue(e.target.value)}/>
        <AddButton onClick={handleClick}>+</AddButton>
    </Container>
  );
};


const Container = styled.div`
    list-style: none;
    border-radius: 10px;
    height: 80px;
    width: 286px;
    margin: 10px auto 0;
    background-color: ${(props) => props.theme.columnBackground};
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const InputTask = styled.input`
  height: 30px;
  border: 1px ${(props) => props.theme.darkAccent};
  border-style: dashed;
  border-radius: 10px;
  padding-left: 5px;
  font-size: 15px;
  outline: none;
`

const AddButton = styled.button`

	background-color:${(props) => props.theme.accent};
	border-radius:28px;
	border:1px solid ${(props) => props.theme.darkAccent};
	display:inline-block;
	cursor:pointer;
	color:#fff;
	font-size:28px;
	padding:4px 10px;
	text-decoration:none;
	text-shadow:0px 1px 0px #000;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  margin: 4px;

  &:hover {
	  background-color:${(props) => props.theme.darkAccent};
  }

  &:active {
    position:relative;
    top:1px;
  }

`

