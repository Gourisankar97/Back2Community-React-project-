import React, { Component } from 'react'
import { Button } from '../Button'
import MenuItems from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
    state = {
        clicked: false
    }
    HnadleClick = () =>
    {
        this.setState({
            clicked: !this.state.clicked
        })
    }


    componentWillMount()
    {
        document.title = "Back 2 Community";
    }

    componentDidMount()
    {
        document.title = "Back 2 Community";
    }
    render() {
        return (
            <nav className = "Navbar-Items">
                <h1 className="navbar-logo">B2C<i class="fa fa-code" aria-hidden="true"></i></h1>
                <div className="menu-icon" onClick={this.HnadleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
                </div>


                <ul className={this.state.clicked? 'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item,index) =>{
                        return (
                        <li>
                            <a className={item.cName} href={item.url}> 
                            {item.title}
                            </a>
                        </li>
                        )
                    })}
                    
                </ul>
                <Button>SignUp</Button>
                <Button buttonStyle="btn--outline">Login</Button>
               
              
            </nav>
            
        )
    }
}

export default Navbar
