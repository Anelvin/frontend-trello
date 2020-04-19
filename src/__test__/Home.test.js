import React from 'react';
import Home from '../views/Home/Home';
import { shallow } from 'enzyme';

describe('Home view', () => {
    
    let component;

    beforeEach(() => component = shallow(<Home />));

    it('should have one tag HeaderHome', () => {
        const component = shallow(<Home />);
        let nodo = component.find('HeaderHome');
        expect(nodo.length).toEqual(1);
    });

    it('should have one tag DescriptionHome', () => {
        const component = shallow(<Home />);
        let nodo = component.find('DescriptionHome');
        expect(nodo.length).toEqual(1);
    });

    it('should have one tag CharacteristicsHome', () => {
        const component = shallow(<Home />);
        let nodo = component.find('CharacteristicsHome');
        expect(nodo.length).toEqual(1);
    });
    
});