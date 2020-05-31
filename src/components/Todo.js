import React from 'react'
// import ReactDom from 'react-dom'
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
import TodoItem from './TodoItem'
import TodoList from'./TodoList'

const todolist= TodoList.map(todo=><TodoItem key={todo.id} text={todo.text}/>)

function MyTodo() {
    return (
        <div>
            <MyHeader />
            <table>{todolist}</table>
            <MyFooter />
        </div>
    )
}

export default MyTodo