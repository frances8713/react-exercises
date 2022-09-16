import { useState, useEffect } from 'react'

export function ClickCounter({initialValue = 0}) {

    const [count, setCount] = useState(initialValue)

    const onCounterChange = () => console.log(`The current count is ${count}`)
    
    useEffect(() => {
        onCounterChange(count) 
    }, [count])

    function handleIncrementValue () {
        setCount (e => e + 1)
    }

    return (
        <div>
            <h2>Counter : {count} </h2>
            <button onClick={handleIncrementValue}>Increment</button>
        </div>
    )
    }