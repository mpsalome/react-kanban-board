import { useState } from "react"
import { TodoListItem } from "./TodoListItem"

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
        <div className="todo-list-container">
            <p>You finished {items.filter(i => i.isCompleted).length} {items.filter(i => i.isCompleted).length > 1 ? 'tasks' : 'task'}</p>
            <form onSubmit={handleTaskSubmit}>
                <input type="text" placeholder="Adicione uma nova tarefa" value={taskValue} onChange={(e) => setTaskValue(e.target.value)}/>
                <button type="submit">Adicionar Tarefa</button>
            </form>
            <ul>
                {items.map(item => <TodoListItem onTaskChanged={handleOnTaskChanged} item={item}/>)}
            </ul>
        </div>
    )
}


