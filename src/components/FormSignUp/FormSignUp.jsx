import React, {Component} from 'react';
import './FormSignUp.scss';
import { Link } from 'react-router-dom';

class FormSignUp extends Component {

    render(){
        return(
            <div className="body-form-signup">
                <form action="">
                    <h4>Crea tu cuenta</h4>
                    <div className="input-email-signup">
                        <input type="text" name="" id="" placeholder="Introduzca el correo electrónico"/>
                    </div>
                    <div className="notice-privacy-policies">
                        <p>Al registrarse, confirma que ha leído y aceptado nuestras <Link to="/legal">Condiciones del Servicio</Link>
                        y nuestra <Link to="/privacy">Política de Privacidad.</Link></p>
                    </div>
                    <div className="button-continue-email">
                        <button>Continuar</button>
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
                <footer>
                    <hr/>
                    <div className="credits">
                        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg" alt=""/>
                        <div>
                            <Link className="links-footer" to='/signup'>Plantillas</Link>
                            <Link className="links-footer" to='/signup'>Precios</Link>
                            <Link className="links-footer" to='/signup'>Aplicaciones</Link>
                            <Link className="links-footer" to='/signup'>Trabajos</Link>
                            <Link className="links-footer" to='/signup'>Blog</Link>
                            <Link className="links-footer" to='/signup'>Desarrolladores</Link>
                            <Link className="links-footer" to='/signup'>Acerca de</Link>
                            <Link className="links-footer" to='/signup'>Ayuda</Link>
                            <Link className="links-footer" to='/signup'>Configuración de las cookies</Link>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default FormSignUp;