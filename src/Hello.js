import React from 'react' 
import { App } from './App'

export class Hello extends React.Component {
    render () {
        return (
        <div>
        <h1>Hello, World!</h1>
        <App />
        </div>
        )
    }
}