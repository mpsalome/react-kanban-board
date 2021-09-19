import { useState } from "react"
import { TodoListItem } from "./TodoListItem"
import styled from 'styled-components'

export const TodoList = () => 
{
    const defaultListItems = [
        {name: 'Task 1', isCompleted: false},
        {name: 'Task 2', isCompleted: false},
        {name: 'Task 3', isCompleted: false},
        {name: 'Task 4', isCompleted: false}
    ]
    
    const [items, setItems] = useState(defaultListItems)
    const [taskValue, setTaskValue] = useState('')

    const  handleTaskSubmit = (e) => {
        if (items.find(i => i.name === taskValue )) {
            e.preventDefault()
            return
        } 
        setItems([...items, {name: taskValue, isCompleted: false}])
        setTaskValue('')
        e.preventDefault()
    }

    const handleOnTaskChanged = (e, item) => {
        setItems(items.map( i => {
            if (i.name === item.name) {
                return{
                    ...i, 
                    isCompleted: e.target.checked
                }
            }
            return i
        }))
    }

    return(
        <TodoContainer>
            <Subtitle>You finished {items.filter(i => i.isCompleted).length} {items.filter(i => i.isCompleted).length > 1 ? 'tasks' : 'task'}</Subtitle>
            <AddTodoContainer onSubmit={handleTaskSubmit}>
                <NewTaskInput type="text" placeholder="Add a new task" value={taskValue} onChange={(e) => setTaskValue(e.target.value)}/>
                <AddButton type="submit">Add Task</AddButton>
            </AddTodoContainer>
            <List>
                {items.map(item => <TodoListItem onTaskChanged={handleOnTaskChanged} item={item}/>)}
            </List>
        </TodoContainer>
    )
}


const TodoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-weight: 400;
`
const Subtitle = styled.p`
    font-family: 'Fredoka One',cursive;
    font-weight: 400;
`

const AddTodoContainer = styled.form`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const NewTaskInput = styled.input`
    box-sizing: border-box;
    display: block;
    border: 3px solid #000;
    color: #000;
    background: transparent;
    border-radius: 4px;
    height: 40px;
    width: 50vw;
    padding: 1vw;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    background-color: #fff;
    min-width: 258px;
`
const List = styled.ul`
   padding: 0;
   margin: 0;
`
const AddButton = styled.button`
    background-color: ${(props) => props.theme.accent};
    color: #000;
    padding: 5px;
    border-radius: 4px;
    margin: 30px 0 10px 0;
    width: 153px;
    height: 42px;
    text-transform: uppercase;
    font-weight: 900;
    border: 3px solid #000; 

    :hover {
        background-color: ${(props) => props.theme.darkAccent};
        cursor: pointer;
    }

    :active {
        background-color: #000;
        color: #fff;
    }
`