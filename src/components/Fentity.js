import React, { Component } from 'react';
import '../styles/fentity.css'
import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom";


class Fentity extends Component {

    render() {
        console.log(this.props.state)
        console.log(this.props.match)
        // const name = this.props.match.params.name
        const { fentities, name } = this.props.match.params
        console.log(name)
        // const fentitiesCategory = this.props.match.params.fentities
        console.log(fentities)
        const fentity = this.props.state[fentities].filter(f => {
            return f.name.toLowerCase() === name.toLowerCase()
        })[0]
        // console.log(fentity.name)
        return (
            <React.Fragment>
                {fentity
                 ? (
                    <div id="creature-container">
                        <Link id="backToFentities" to={`/directory/${fentities}`}>Back</Link>
                        <h1>{fentity.name}</h1>
                        <img src={fentity.imgUrl} alt="" />
                        <div className="title">Power:</div>
                        <div className="power text"> {fentity.power}</div>
                        <div className="other text">{fentity.other}</div>
                    </div>
                )
                : (<Redirect to={`/directory/${fentities}`} />)}
            </React.Fragment>
        );
    }
}




export default Fentity;
