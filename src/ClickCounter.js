import { useState } from 'react'

export function ClickCounter({initialValue = 0}) {

    const [count, setCount] = useState(initialValue)

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