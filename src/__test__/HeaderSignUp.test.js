import React from 'react';
import HeaderSignUp from '../components/HeaderSignUp/HeaderSignUp';
import { shallow } from 'enzyme';

describe('HeaderSignUp component', () => {

    let component;

    beforeEach(() => component = shallow(<HeaderSignUp />));

    it('should have one tag div', () => {
        const component = shallow(<HeaderSignUp />);
        let nodo = component.find('div');
        expect(nodo.length).toEqual(1);
    });
    
    it('should have one tag img', () => {
        const component = shallow(<HeaderSignUp />);
        let nodo = component.find('img');
        expect(nodo.length).toEqual(1);
    });

    it('should have one class body-header-signup', () => {
        const component = shallow(<HeaderSignUp />);
        let nodo = component.find('.body-header-signup');
        expect(nodo.length).toEqual(1);
    });
});