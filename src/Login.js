import React from "react";


export class Login extends React.Component {
    state = {
        username : '',
        password : '' ,
        remember : false
    }

    handleInputLoginChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState ({
            [name]: type === 'checkbox' ? checked : value,
        })
    }
    onLogin = () => {
        this.props.conditions(this.state)
    }

    handleResetButton = () => {
        this.setState ({
            username : '',
            password: '',
            remember: false
        })
    }

    render () {
        return (
            <div>
                <h2>Form</h2>
                <input name = 'username' value = {this.state.username} onChange={this.handleInputLoginChange}/>
                <input name = 'password' type ='password' value = {this.state.password} onChange={this.handleInputLoginChange}/>
                <input name = 'remember' type='checkbox' checked={this.state.remember} onChange={this.handleInputLoginChange}/>
                <div>
                    <button type='submit' disabled={(this.state.username === '' || this.state.password === '') ? true : false} onClick={this.onLogin}>Login</button>
                    <button onClick={this.handleResetButton}>Reset</button>
                </div>
            </div>

        )
    }
}