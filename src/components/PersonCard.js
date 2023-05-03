import React, { useState } from 'react'

const PersonCard = (props) => {
    const {firstName, lastName, hairColor} = props
    const [age, setAge] = useState(props.age)
    console.log(age)
    const handleClick = () => {
        setAge(age + 1)
    }
    return(
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={ handleClick }>Click to celebrate { firstName }'s birthday</button>
        </div>
    )
}

export default PersonCard