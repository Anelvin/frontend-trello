import React, {Component} from 'react';
import './SignIn.scss';
import HeaderSignIn from '../../components/HeaderSignUp/HeaderSignUp';
import FormSignIn from '../../components/FormSignIn/FormSignIn';
import FooterSignIn from '../../components/FooterSignUp/FooterSignUp';
import Axios from 'axios';
import { connect } from 'react-redux';
import { saveToken } from '../../store/actions/tokenActions';
import { saveUser } from '../../store/actions/userActions';

class SignIn extends Component {
    constructor(props){
        super(props);
    }

    handleSendData = (data) => {
        Axios.post('http://localhost:3001/user/signin', data)
        .then(result => {
            console.log(result);
            this.props.saveToken(result.data.token);
            this.props.saveUser(result.data.user);
            this.props.history.push(`/dashboard/${result.data.user[0]}`);
        })
    }

    render(){
        return (
            <div className="view-signin">
                <HeaderSignIn />
                <FormSignIn handleSendData={this.handleSendData}/>
                <FooterSignIn />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveToken: (token) => dispatch(saveToken(token)),
        saveUser: (user) => dispatch(saveUser(user))
    }
}

export default connect(null, mapDispatchToProps) (SignIn);