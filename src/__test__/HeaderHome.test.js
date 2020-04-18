import React from 'react';
import HeaderComponent from '../components/HeaderHome/HeaderHome';
import { shallow } from 'enzyme';

describe('HeaderComponent', () => {

    let component;
    beforeEach(() => component = shallow(<HeaderComponent />));

    it('should show 3 div tags', () => {
        const component = shallow(<HeaderComponent />);
        let nodo = component.find('div');
        expect(nodo.length).toEqual(3);
    });

    it('should show 2 Link tags', () => {
        const component = shallow(<HeaderComponent />);
        let nodo = component.find('Link');
        expect(nodo.length).toEqual(2);
    });

    it('should have one class body-header-home', () => {
        const component = shallow(<HeaderComponent />);
        let nodo = component.find('.body-header-home');
        expect(nodo.length).toEqual(1);
    });

    it('should have one class svg-trello', () => {
        const component = shallow(<HeaderComponent />);
        let nodo = component.find('.svg-trello');
        expect(nodo.length).toEqual(1);
    });

    it('should have one class links-auth', () => {
        const component = shallow(<HeaderComponent />);
        let nodo = component.find('.links-auth');
        expect(nodo.length).toEqual(1);
    });

    it('should redirect to /signup', () => {
        const component = shallow(<HeaderComponent />);
        let nodo = component.find('.signup');
        expect(nodo.length).toEqual(1);
        expect(nodo.text()).toEqual('Registrarse');
        expect(nodo.prop('to')).toEqual('/signup')
    })
});