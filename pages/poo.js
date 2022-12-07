import React from "react"

const poo = () => {
    const [data, setData] = React.useState(0)
    const onPress = () => {
        fetch("https://swapi.dev/api/people/1/").then((response) => {
            console.log("Done", response)
            response.json().then((responseData) => {
                console.log(responseData)
                console.log(responseData.birth_year)
                setData(responseData.birth_year)
            })
        })
    }
    return <div>
            <div>{data}</div>
            <div><button onClick={onPress}>Press me..</button></div>
        </div>
}

export default poo