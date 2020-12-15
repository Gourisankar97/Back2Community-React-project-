import React from 'react'
import './Q.css'


function Questions(props) {
    return (
        <div className="questions">
            <div>
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}

export default Questions;
