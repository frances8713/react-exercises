import { useCounter } from './useCounter'

export function HookCounter ({initialValue = 0}) {
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    return (
        <div>
            <h3>The Counter is : {counter}</h3>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}