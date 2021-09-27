import styled from 'styled-components'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTask } from "../store/actions/tasks";

export const AddListItem = (props) => {

  const [taskValue, setTaskValue] = useState('')
  const dispatch = useDispatch()

  const  handleClick = () => {
    let newTask = {id: Math.random().toString(36).slice(2), name: taskValue, type: props.type}
    dispatch(addTask(newTask))
    setTaskValue('')
  }

  return (
    <Container>
        <input type="text" placeholder="Add a new task" value={taskValue} onChange={(e) => setTaskValue(e.target.value)}/>
        <button onClick={handleClick}>Add Task</button>
    </Container>
  );
};


const Container = styled.div`
    list-style: none;
    border-radius: 4px;
    border: 3px dotted #000;
    height: 80px;
    width: 246px;
    margin: 25px auto;
    background-color: #fff;
`;

