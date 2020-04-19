import React from 'react';
import FormSignUp from '../components/FormSignUp/FormSignUp';
import { shallow } from 'enzyme';

describe('FromSignUp component', () => {
    
    let component;

    beforeEach(() => component = shallow(<FormSignUp />));

    it('should have one tag form', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('form');
        expect(nodo.length).toEqual(1);
    });

    it('should have one tag footer', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('footer');
        expect(nodo.length).toEqual(1);
    });

    it('should have one tag h4', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('h4');
        expect(nodo.length).toEqual(1);
        expect(nodo.text()).toEqual('Crea tu cuenta');
    });

    it('should have twelve tags Link', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('Link');
        expect(nodo.length).toEqual(12);
    });

    it('should have one class body-form-signup', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('.body-form-signup');
        expect(nodo.length).toEqual(1);
    });

    it('should have one class input-email-signup', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('.input-email-signup');
        expect(nodo.length).toEqual(1);
    });

    it('should have one class notice-privacy-policies', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('.notice-privacy-policies');
        expect(nodo.length).toEqual(1);
    });

    it('should have one class button-continue-email', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('.button-continue-email');
        expect(nodo.length).toEqual(1);
    });

    it('should have one class separator-o-signup', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('.separator-o-signup');
        expect(nodo.length).toEqual(1);
    });

    it('should have one class link-to-login', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('.link-to-login');
        expect(nodo.length).toEqual(1);
    });

    it('should have one class credits', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('.credits');
        expect(nodo.length).toEqual(1);
    });

    it('should have one id google', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('#google');
        expect(nodo.length).toEqual(1);
    });

    it('should have one id microsoft', () => {
        const component = shallow(<FormSignUp />);
        let nodo = component.find('#microsoft');
        expect(nodo.length).toEqual(1);
    });
});