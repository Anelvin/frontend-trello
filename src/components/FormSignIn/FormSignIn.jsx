import React, {Component} from 'react';
import './FormSignIn.scss';
import { Link } from 'react-router-dom';

class FormSignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        this.props.handleSendData(this.state);
    }


    render(){
        return (
            <div className="body-form-signup">
                <div className="form">
                    <h4>Iniciar sesión en Trello</h4>
                    <div className="input-email-signup">
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Introduzca el correo electrónico"/>
                    </div>
                    <div className="input-email-signup">
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Introduzca la contraseña"/>
                    </div>
                    <div className="button-continue-email">
                        <button id="buttom-signin" onClick={this.handleSubmit}>Iniciar sesión</button>
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
                        <Link className="link-to-signin" to='/signin'>¿No puede iniciar sesión?</Link>
                    </div>
                    <div className="link-to-login">
                        <Link className="link-to-signin" to='/signin'>Regóistrese para crearuna cuenta</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormSignIn;