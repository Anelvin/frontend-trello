import React from 'react';
import SignIn from '../views/SignIn/SignIn';
import { shallow } from 'enzyme';

describe('SignIn component', () => {

    let component;

    beforeEach(() => component = shallow(<SignIn />));

    it('should have one tag HeaderSignIn', () => {
        const component = shallow(<SignIn />);
        let nodo = component.find('HeaderSignUp');
        expect(nodo.length).toEqual(1);
    });

    it('should have one tag FormSignIn', () => {
        const component = shallow(<SignIn />);
        let nodo = component.find('FormSignIn');
        expect(nodo.length).toEqual(1);
    });

    it('should have one tag FooterSignIn', () => {
        const component = shallow(<SignIn />);
        let nodo = component.find('FooterSignUp');
        expect(nodo.length).toEqual(1);
    });

    it('should have one class view-signin', () => {
        const component = shallow(<SignIn />);
        let nodo = component.find('.view-signin');
        expect(nodo.length).toEqual(1);
    });
});