import React from 'react'
import DSAItems from './DSAItems'
import './DsA.css'
import BTNLetsgo from './BTNLetsgo'
function DSA() {

    return (
        <div>
            <ul>
                {
                DSAItems.map((item,index) => {
                    return (
                        <div className="ds-algo">
                            <li>
                            {item.title} <i className={item.icon}/> 
                             <BTNLetsgo></BTNLetsgo>
                            
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
