import React, {Component} from 'react';
import './Spinner.scss';

class Spinner extends Component {

    render(){
        return (
            <div class="containerSpinner">
                <div class="spinner"></div>
                <h1>Cargando...</h1>
            </div>
        )
    }
}

export default Spinner;