import React, {Component} from 'react';
import './SignIn.scss';
import HeaderSignIn from '../../components/HeaderSignUp/HeaderSignUp';
import FormSignIn from '../../components/FormSignIn/FormSignIn';
import FooterSignIn from '../../components/FooterSignUp/FooterSignUp';
import Axios from 'axios';
import { connect } from 'react-redux';

class SignIn extends Component {
    constructor(props){
        super(props);
    }

    handleSendData = (data) => {
        Axios.post('http://localhost:3001/user/signin', data)
        .then(result => {
            console.log(result);
            //this.props.saveToken(result.data.responseToken)
            this.props.history.push('/dashboard');
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

export default connect(null, null) (SignIn);