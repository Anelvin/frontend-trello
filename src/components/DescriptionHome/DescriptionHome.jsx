import React, {Component} from 'react';
import './DescriptionHome.scss';

class DescriptionHome extends Component{

    render(){
        return(
            <div className="body-description-home">
                <div className="details-description-home">
                    <div className="description-home">
                        <h1>Trello le permite trabajar de forma más
                            colaborativa y ser más productivo.
                        </h1>
                        <p>Las tarjetas, listas y tableros de Trello le
                            permiten organizar y priorizar sus proyectos de forma divertida, flexible
                            y proyectosa.
                        </p>
                    </div>
                    <div className="img-description-home">
                        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt=""/>
                    </div>
                </div>
                <div className="form-description-home">
                    <form action="">
                        <input type="text" placeholder="Correo electrónico"/>
                        <button>Regístrese. ¡Es gratis!</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default DescriptionHome;