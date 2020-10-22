import React from 'react'

class Profile extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return(
            <>
            <main id="profile">
            <div class="avatar"></div>
                    <label>Name:</label>
                    <input value="Joshua Akan-Etuk" type="text"></input><br/>
                    <label>Profile Image URL:</label>
                    <input type="text"></input><br/>
                    <input type="submit"></input><br/>
            </main>

            </>
        );
    }
}

export default Profile;