import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './HeaderHome.scss';

class HeaderHome extends Component {

    render(){
        return (
            <div className="body-header-home">
               <div className="svg-trello">
                    <img src="./img/trello-logo-white3.svg" alt=""/>
               </div>
               <div className="links-auth">
                    <Link className="signin">Iniciar sesión</Link>
                    <Link className="signup">Registrarse</Link>
               </div>
            </div>
        )
    }
}

export default HeaderHome;