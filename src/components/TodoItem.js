import React from 'react'

// function TodoItem(props) {
//     console.log(props)
//     return (
//         <div>
//             <input type='checkbox' />
//             <p> {props.text}</p>
//         </div>
//     )
// }

class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <tr>
                    <td><input type='checkbox' /></td>
                    <td><p> {this.props.text}</p></td>
                </tr>
            </div>
        )
    }
}

export default TodoItem