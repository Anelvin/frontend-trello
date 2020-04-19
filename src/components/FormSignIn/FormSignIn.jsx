import React, {Component} from 'react';
import './FormSignIn.scss';
import { Link } from 'react-router-dom';

class FormSignIn extends Component {

    render(){
        return (
            <div className="body-form-signup">
                <form action="">
                    <h4>Iniciar sesión en Trello</h4>
                    <div className="input-email-signup">
                        <input type="text" name="" id="" placeholder="Introduzca el correo electrónico"/>
                    </div>
                    <div className="input-email-signup">
                        <input type="text" name="" id="" placeholder="Introduzca la contraseña"/>
                    </div>
                    <div className="button-continue-email">
                        <button id="buttom-signin">Iniciar sesión</button>
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
                </form>
            </div>
        )
    }
}

export default FormSignIn;