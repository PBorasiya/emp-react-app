import React, {Component} from 'react'
import { Link} from 'react-router-dom'
import { withRouter } from 'react-router'

class HeaderComponent extends Component{
    render(){
        
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    
                        <ul className="navbar-nav">
                            <li><Link to="/employees" className="nav-link">Employees</Link></li>
                           
                        </ul>
                            
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);