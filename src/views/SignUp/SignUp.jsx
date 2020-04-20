import React, {Component} from 'react';
import './SignUp.scss';
import HeaderSignUp from '../../components/HeaderSignUp/HeaderSignUp';
import FormSignUp from '../../components/FormSignUp/FormSignUp';
import FooterSignUp from '../../components/FooterSignUp/FooterSignUp';
import Spinner from '../../components/Spinner/Spinner';
import { connect } from 'react-redux';
import Axios from 'axios';
import { saveToken } from '../../store/actions/tokenActions';

class SignUp extends Component {
    constructor(props){
        super(props);
    }

    handleSendData = (data) => {
        Axios.post('http://localhost:3001/user/create', data)
        .then(result => {
            console.log(result);
            this.props.saveToken(result.data.responseToken)
            this.props.history.push('/dashboard');
        })
    }

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
                    <FormSignUp handleSendData={this.handleSendData}/>
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

const mapDispatchtoProps = dispatch => {
    return {
        saveToken: (token) => dispatch(saveToken(token))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps) (SignUp);