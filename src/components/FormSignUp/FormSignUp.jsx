import React, {Component} from 'react';
import './FormSignUp.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { spinnerToTrue } from '../../store/actions/spinnerActions';

class FormSignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        console.log(this.props.loading);
    }
    render(){
        return ( 
                <div className="body-form-signup">
                <form action="">
                    <h4>Crea tu cuenta</h4>
                    <div className="input-email-signup">
                        <input type="text" name="email" value={this.state.email} placeholder="Introduzca el correo electrónico"/>
                    </div>
                    <div className="input-email-signup">
                        <input type="password" name="password" value={this.state.password} placeholder="Introduzca la contraseña"/>
                    </div>
                    <div className="notice-privacy-policies">
                        <p>Al registrarse, confirma que ha leído y aceptado nuestras <Link to="/legal">Condiciones del Servicio</Link>
                        y nuestra <Link to="/privacy">Política de Privacidad.</Link></p>
                    </div>
                    <div className="button-continue-email">
                        <button>Registrarse</button>
                    </div>
                    <div className="separator-o-signup">
                        <p>o</p>
                    </div>
                    <div id="google">
                        <img src="./img/google-logo.png" alt=""/>
                        <span>Continuar con Google</span>
                    </div>
                    <div id="microsoft">
                        <img src="./img/microsoft-logo.png" alt=""/>
                        <span>Continuar con Microsoft</span>
                    </div>
                    <hr/>
                    <div className="link-to-login">
                        <Link className="link-to-signin" to='/signin'>¿Ya tiene una cuenta? Inicie sesión</Link>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loadingReducer.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeSpinner: (value) => dispatch(spinnerToTrue(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp);