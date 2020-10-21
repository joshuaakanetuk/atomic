import React from 'react'
import { Link, withRouter } from "react-router-dom";

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return(
            <section className="container">
                {/* Navigation Bar */}
                <main id="home">
                    <section className="frontpage ineedspace">
                    <h1>Measure your day.</h1>
                    <h3>Use ATOMIC in order to track things you tend to forget about or want to know more of.</h3>
                    <ul className="">
                        <li><Link className="" to="/login">Login</Link></li>
                        <li><Link className="" to="/register">Register</Link></li>
                    </ul> 
                    </section>
                    <section className="features ineedspace">
                        <ul className="">
                            <li>Create cells (or activity logs) of your feelings and activities over the course of a day. </li>
                            <li>Check a summary of all of your cells to see the total accumulated total of your activities.</li>
                            <li></li>
                        </ul>

                    </section>
                    <section className="footer ineedspace">
                        <div>ATOMIC</div>
                        <div>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </div>
                    </section>
                </main>
            </section>
        );
    }
}

export default Home;