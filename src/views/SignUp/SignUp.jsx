import React, {Component} from 'react';
import './SignUp.scss';
import HeaderSignUp from '../../components/HeaderSignUp/HeaderSignUp';
import FormSignUp from '../../components/FormSignUp/FormSignUp';
import FooterSignUp from '../../components/FooterSignUp/FooterSignUp';
import Spinner from '../../components/Spinner/Spinner';
import { connect } from 'react-redux';

class SignUp extends Component {

    render(){
        return (
            <div>
                {this.props.loading === true
                ?
                <div className="view-signup">
                    <Spinner />
                </div>
                :

                <div className="view-signup">
                    <HeaderSignUp />
                    <FormSignUp />
                    <FooterSignUp />
                </div>
            }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loadingReducer.status
    }
}

export default connect(mapStateToProps,null) (SignUp);