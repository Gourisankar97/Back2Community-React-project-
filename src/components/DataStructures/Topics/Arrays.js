import React from 'react'
import './topics.css'


function Arrays() {
    const Easy = {
        color:'lightgreen',
        fontSize:'large',
        padding:'2px 6px',
        borderRadius:'5px',
        border: '1px solid black',
    };

    const Medium = {
        color:'Orange',
        fontSize:'large',
        border: '1px solid black',
        padding:'2px 6px',
        borderRadius:'5px',
    }
    
    document.title = 'Arrays';

    return (
        <div className="topics">
            <div className="title">
                <h1>Arrays</h1>
            </div>

            {/* Q 1 */}
            <div className="Questions">

                    <ul>
                        <li>
                            Q.1 Two Sum
                        </li>
                        <li style={Easy}>
                            Easy
                        </li>
                    </ul>
            </div>

            {/* Q2 */}
            <div className="Questions">

                    <ul>
                        <li>
                            Q.2 Three Sum
                        </li>
                        <li style={Medium}>
                            Medium
                        </li>
                    </ul>
            </div>

            {/* Q3 */}
            <div className="Questions">

                    <ul>
                        <li>
                            Q.2 Maximum sum sub-array
                        </li>
                        <li style={Easy}>
                            Easy
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default Arrays;