import React from 'react'
// import ReactDom from 'react-dom'
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'


function MyTodo() {
    return (
        <div>
            <MyHeader />
            <input type='checkbox' />
            <p> Placeholder for todo</p>
            <input type='checkbox' />
            <p> Placeholder for todo</p>
            <input type='checkbox' />
            <p> Placeholder for todo</p>
            <input type='checkbox' />
            <p> Placeholder for todo</p>
            <MyFooter />
        </div>
    )
}

export default MyTodo