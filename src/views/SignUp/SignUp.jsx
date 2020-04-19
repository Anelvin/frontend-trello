import React, {Component} from 'react';
import './SignUp.scss';
import HeaderSignUp from '../../components/HeaderSignUp/HeaderSignUp';
import FormSignUp from '../../components/FormSignUp/FormSignUp';
import FooterSignUp from '../../components/FooterSignUp/FooterSignUp';

class SignUp extends Component {

    render(){
        return (
            <div className="view-signup">
                <HeaderSignUp />
                <FormSignUp />
                <FooterSignUp />
            </div>
        )
    }
}

export default SignUp;