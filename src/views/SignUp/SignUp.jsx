import React, {Component} from 'react';
import './SignUp.scss';
import HeaderSignUp from '../../components/HeaderSignUp/HeaderSignUp';
import FormSignUp from '../../components/FormSignUp/FormSignUp';

class SignUp extends Component {

    render(){
        return (
            <div className="view-signup">
                <HeaderSignUp />
                <FormSignUp />
            </div>
        )
    }
}

export default SignUp;