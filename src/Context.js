import { createContext, useState } from "react";

export const TodoList = createContext()

function Context({children}) {

    const [todo, setTodo] = useState()
    const [todos, setTodos] = useState([])
    const [add, setAdd] = useState(true)
    const [checked, setChecked] = useState(false)

    var IdUpdate = 0

    const handleSubmit = () => {
        setTodos(prev => [...prev, {content: todo, id: `todo${todos.length}`}])
        setTodo('')
    }

    const handleDelete = (id) => {
        let CurrentArray = todos
            CurrentArray = CurrentArray.filter(todo => todo.id !== id)
            setTodos(CurrentArray)
    }

    const handleEdit = (content, id) => {
        setTodo(content)
        setAdd(false)
        IdUpdate = id
    }

    const handleUpdate = () => {
        todos.forEach(TodoUpdate => {
            if(TodoUpdate.id === IdUpdate)
                TodoUpdate.content = todo
                
                
        })
        setAdd(true)
    }

    const handleChecked = (e) => {
        
    }

    const data = {
        todo, setTodo,
        handleSubmit,
        todos,
        handleDelete, 
        handleUpdate, 
        handleEdit,
        add, setAdd,
        handleChecked

    }

    return (  
        <TodoList.Provider value={data}>
            {children}
        </TodoList.Provider>
    );
}

export default Context;
