

export function Sum ({numbers = [3, 4, 6]}) {
    return <h3>{numbers.reduce((a , b) => a + b)}</h3>
}