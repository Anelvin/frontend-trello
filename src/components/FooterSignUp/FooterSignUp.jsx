import React, {Component} from 'react';
import './FooterSignUp.scss';
import { Link } from 'react-router-dom';

class FooterSignUp extends Component {

    render(){
        return (
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
        )
    }
}

export default FooterSignUp;