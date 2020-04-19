import React from 'react';
import FooterSignUp from '../components/FooterSignUp/FooterSignUp';
import { shallow } from 'enzyme';

describe('FooterSignUp component', () => {

    let component;

    beforeEach(() => component = shallow(<FooterSignUp />));

    it('should have one tag footer', () => {
        const component = shallow(<FooterSignUp />);
        let nodo = component.find('footer');
        expect(nodo.length).toEqual(1);
    });

    it('should have nine tags Link', () => {
        const component = shallow(<FooterSignUp />);
        let nodo = component.find('Link');
        expect(nodo.length).toEqual(9);
    });

    it('should have one class credits', () => {
        const component = shallow(<FooterSignUp />);
        let nodo = component.find('.credits');
        expect(nodo.length).toEqual(1);
    });
    
});