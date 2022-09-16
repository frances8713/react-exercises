
import { useState, useEffect} from 'react'

export function Counter ({initialValue = 0}) {
const [count, setCount] = useState(initialValue)

useEffect (() => {
    const interval = setInterval(() => {
        setCount(c => c + 1);
    }, 1000);
    
    return () => clearInterval(interval);
}, [])

return <h1>Count: {count}</h1>

}