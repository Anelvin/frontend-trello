import React from 'react';
import FormSignIn from '../components/FormSignIn/FormSignIn';
import { shallow } from 'enzyme';

describe('FormSignIn component', () => {
    
    let component;

    beforeEach(() => component = shallow(<FormSignIn />));

    it('should have one tag form', () => {
        const component = shallow(<FormSignIn />);
        let nodo = component.find('form');
        expect(nodo.length).toEqual(1);
    });

    it('should have one id google', () => {
        const component = shallow(<FormSignIn />);
        let nodo = component.find('#google');
        expect(nodo.length).toEqual(1);
    });

    it('should have one id microsoft', () => {
        const component = shallow(<FormSignIn />);
        let nodo = component.find('#microsoft');
        expect(nodo.length).toEqual(1);
    });

    it('should have one id buttom-signin', () => {
        const component = shallow(<FormSignIn />);
        let nodo = component.find('#buttom-signin');
        expect(nodo.length).toEqual(1);
        expect(nodo.text()).toEqual('Iniciar sesión');
    });

    it('should have two tags Link', () => {
        const component = shallow(<FormSignIn />);
        let nodo = component.find('Link');
        expect(nodo.length).toEqual(2);
    });


});