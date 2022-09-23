import { useRef, useState, useEffect } from 'react'

export function CarDetails({ initialData = {model: 'Fiat 500', year: '2019', color: 'red'} }) {
const inputRef = useRef()

const [data, setData] = useState(false)

    useEffect(() => {
        inputRef.current.elements.model.value = initialData.model 
        inputRef.current.elements.year.value = initialData.year 
        inputRef.current.elements.color.value = initialData.color
    }, [initialData])

    useEffect(() => {
        if (data === true) {
            inputRef.current.reset()
        } console.log(initialData)
    }, [data])
    
    const handleInput = () => setData(true)

    return (
        <div>
            <h3>Car details: </h3>
            <form ref={inputRef} onChange={handleInput}>
            <input name='model'></input>
            <input name='color'></input>
            <input name='year'></input>
            <button type='submit'>Submit</button>
        </form>
        </div>
        )
}


