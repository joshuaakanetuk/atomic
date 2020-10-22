import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return(
            <nav className="">
                <ul className="">
                    <li><a href="/"><i className="ri-donut-chart-fill"></i></a></li>
                    <li>ATOMIC</li>
                    <li><Link to="/dashboard"> Dashboard </Link></li>
                    <li><Link to="/dashboard/profile"> Profile </Link></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;