import { useState } from 'react'

export function useLogin () {
    const [data, setData] = useState ({
        username: '',
        password: '',
        remember: false,
    })

    function handleInputChange (event) {
        const {name, value, type, checked} = event.target;
        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value 
            }
        })
    }

    return {
        data: data,
        onHandleInputChange: handleInputChange
    }
}
