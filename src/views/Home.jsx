import React, {Component} from 'react';
import './Home.scss';
import HeaderHome from '../components/HeaderHome/HeaderHome';
import DescriptionHome from '../components/DescriptionHome/DescriptionHome';
import CharacteristicsHome from '../components/CharacteristicsHome/CharacteristicsHome';

class Home extends Component {
    
    render(){
        return (
            <div className="view-home">
                <HeaderHome />
                <DescriptionHome />
                <CharacteristicsHome />
            </div>
        )
    }
}

export default Home;