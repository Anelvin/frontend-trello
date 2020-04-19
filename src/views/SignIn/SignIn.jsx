import React, {Component} from 'react';
import './SignIn.scss';
import HeaderSignIn from '../../components/HeaderSignUp/HeaderSignUp';
import FormSignIn from '../../components/FormSignIn/FormSignIn';
import FooterSignIn from '../../components/FooterSignUp/FooterSignUp';

class SignIn extends Component {

    render(){
        return (
            <div className="view-signin">
                <HeaderSignIn />
                <FormSignIn />
                <FooterSignIn />
            </div>
        )
    }
}

export default SignIn;