// import React, { useState } from 'react'
import React, {Component} from "react"

class PersonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: props.age
        }
    }
    
    handleClick = () => {
        console.log('clicking')
        this.setState({age: this.state.age += 1})
    }
    render() {
        // const {firstName, lastName, age, hairColor} = this.props

        return (
            <div>
                <h2>{this.props.lastName}, {this.props.firstName}</h2>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { this.props.hairColor }</p>
                <button onClick={ this.handleClick }>Click to celebrate { this.props.firstName }'s birthday</button>
            </div>
        )
    }
}
// const PersonCard = (props) => {
//     const {firstName, lastName, age, hairColor} = props
//     const [stateAge, setStateAge] = useState(age)
//     const handleClick = () => {
//         setStateAge(stateAge + 1)
//     }
//     return(
//         <div>
//             <h2>{lastName}, {firstName}</h2>
//             <p>Age: { stateAge }</p>
//             <p>Hair Color: { hairColor }</p>
//             <button onClick={ handleClick }>Click to celebrate { firstName }'s birthday</button>
//         </div>
//     )
// }

export default PersonCard