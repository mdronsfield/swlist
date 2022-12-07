import React from "react"

const poo = () => {
    const [count, setCount] = React.useState(0)
    const onPress = () => {
        setCount(count+1)
    }
    return <div>
            <div>{count}</div>
            <div><button onClick={onPress}>Press me..</button></div>
        </div>
}

export default poo