import React from 'react'
import DashboardContext from '../../../context/DashboardContext';
import ApiService from '../../../services/api';

class Profile extends React.Component{
    static contextType = DashboardContext;
    constructor(props) {
        super(props)
        this.state = {
            profile_image: '',
            full_name: ''
        }
    }

    handleSubmit = () => {
        ApiService.updateUser(this.context.user.user_id, this.context.user)
        .then((data) => {
            console.log(data)
            // this.setState({
            //   cells: data,
            // });
          })
        .catch(() => console.log())
    }

    componentDidMount () {
        this.setState({
            profile_image: this.context.user.profile_image,
            full_name: this.context.user.full_name
        })
    }
    render() {

        return(
            <>
            <main id="profile">
            <div style={{backgroundImage: `url('${this.context.user.profile_image}')`}} className="avatar"></div>
                    <label>Name:</label>
                    <input onChange={(e) => {
                        this.context.updateState({ user: { ...this.context.user, full_name: e.target.value } })

                    }} defaultValue={this.context.user.full_name} value={this.context.user.full_name} type="text"></input><br/>

                    <label>Profile Image URL:</label>
                    <input onChange={(e) => {
                        this.context.updateState({ user: { ...this.context.user, profile_image: e.target.value } })
                    }} defaultValue={this.context.user.profile_image} value={this.context.user.profile_image} type="text"></input><br/>
                    <input onClick={this.handleSubmit} type="submit"></input><br/>
            </main>

            </>
        );
    }
}

export default Profile;