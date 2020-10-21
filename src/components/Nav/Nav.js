import React from 'react'

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
                    <li><a href="/dashboard">Dashboard</a></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;