import { useContext, createContext } from "react";


export const TodoContext = createContext({
    Todos:[
        {
            id:1,
            todo: "Message",
            complete:false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
})

export const TodoContextProvider = TodoContext.Provider;

export const TodoApi = ()=>{
    return useContext(TodoContext)
}