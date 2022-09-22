import { useMemo } from 'react'

    const list = [
        {id: 1, name: 'Marco', age: 65},
        {id: 2, name: 'Rosa', age: 25},
        {id: 3, name: 'Flavia', age: 30},
        {id: 4, name: 'Enzo', age: 15},
        {id: 5, name: 'Gino', age: 7},
        {id: 6, name: 'Miria', age: 73}
      ]
      
    export function FilteredList () {
        const filteredList = useMemo (() => {
            return list.filter(item => item.age >= 18)
        }, [list])

    return (
        <div>
            <ul>
                {filteredList.map((item) => <li>{item.name} {item.age}</li>)}
            </ul>
        </div>
    )
}