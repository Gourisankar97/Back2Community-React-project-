import React, {useState} from 'react'
import DSAItems from './DSAItems'
import './DsA.css'
import BTNLetsgo from './BTNLetsgo'
import {Link} from 'react-router-dom'
function DSA() {
    document.title = "Back 2 Community";

    const [loadDSA, setLoad] = useState(false);

    return (
        <div className="dsa-div">
            <ul>
                {
                DSAItems.map((item,index) => {
                    return (
                        <div className="ds-algo">
                            <li>
                            {item.title} <i className={item.icon}/> 
                             <Link to={item.url}> <BTNLetsgo ></BTNLetsgo></Link>
                            </li>
                        </div>
                        
                    )
                }
                )}

            </ul>
            
        </div>
    )
}

export default DSA;
