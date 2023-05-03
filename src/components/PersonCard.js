import React, { useState } from 'react'

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    const [stateAge, setStateAge] = useState(age)
    const handleClick = () => {
        setStateAge(stateAge + 1)
    }
    return(
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: { stateAge }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={ handleClick }>Click to celebrate { firstName }'s birthday</button>
        </div>
    )
}

export default PersonCard