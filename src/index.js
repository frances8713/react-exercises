import ReactDOM from 'react-dom'
import { Hello } from './Hello'

const helloElement = <Hello />
const root = document.querySelector('#root')

ReactDOM.render(helloElement, root)