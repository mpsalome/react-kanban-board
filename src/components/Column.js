import { ListItem } from './ListItem'
import styled from 'styled-components';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, removeTask } from "../store/actions/tasks";

export const Column = (props) => {

  const [newDragItem, setNewDragItem] = useState({})

  const [taskType, setTaskType] = useState(props.type)

  const dispatch = useDispatch()

  const handleDragItem = (item) => {
    props.onItemDrag(item)
  }

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setNewDragItem({id: Math.random().toString(36).slice(2), name: props.dragItem.name, type: taskType})
    
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    dispatch(addTask(newDragItem))
    dispatch(removeTask(props.dragItem))
  }

  return (
    <List
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <Title>{props.title}</Title>
      {props.items.map((task) => (
        <ListItem key={task.id} handleDragItem={handleDragItem} item={task} />
      ))}
    </List>
  )
}

const List = styled.ul`
  padding: 10px;
  border-radius: 10px;
  margin: 20px;
  background: ${(props) => props.theme.columnBackground};
`

const Title = styled.p`
  font-family: 'Fredoka One', cursive;
  font-weight: 400;
`
