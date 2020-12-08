import React, {useState} from 'react'
import DSAItems from './DSAItems'
import './DsA.css'
import BTNLetsgo from './BTNLetsgo'
function DSA() {

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
                             <a href={item.title}> <BTNLetsgo ></BTNLetsgo></a>
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
