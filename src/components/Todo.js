import React from 'react'
// import ReactDom from 'react-dom'
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
import TodoItem from './TodoItem'


function MyTodo() {
    return (
        <div>
            <MyHeader />
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <MyFooter />
        </div>
    )
}

export default MyTodo