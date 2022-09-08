import React from "react";


export class TodoList extends React.Component {

    state = {
        items : [
            'one', 'two', 'three', 'four'
        ],
        addItem : ''
    } 
    
    handleInput = (event) => {
        this.setState ({
            addItem : event.target.value
        })
    }

    handleAddItems = (event) => {
        event.preventDefault()
        
        this.setState ({
            items : [...this.state.items, this.state.addItem],
            addItem : ''
        })
    }

    handleResetItems = () => {

        this.setState ({
            items: []
        })
    }

    handleRemoveTodo = (event) => {   
        event.target.parentElement.remove()

    }

    render () {

        return (
            <div>
                <h3>Todo List</h3>
                <ul>
                    {this.state.items.map((item, index) => (
                    <li key={index}>{item } 
                        <button onClick = {this.handleRemoveTodo}>Remove</button> 
                    </li>))}
                </ul>
                <div>
                    <input value = {this.state.addItem} onChange = {this.handleInput}></input>
                    <button onClick = {this.handleAddItems}>Add Todo</button>
                    <button onClick = {this.handleResetItems}>Reset</button>
                </div>
            </div>
        )
    }
}