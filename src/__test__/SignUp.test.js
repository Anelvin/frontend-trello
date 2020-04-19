import React from 'react';
import SignUp from '../views/SignUp/SignUp';
import { shallow } from 'enzyme';

describe('SignUp component', () => {

    let component;

    beforeEach(() => component = shallow(<SignUp />));

    it('should have one tag HeaderSignUp', () => {
        const component = shallow(<SignUp />);
        let nodo = component.find('HeaderSignUp');
        expect(nodo.length).toEqual(1);
    });
    
    it('should have one tag FormSignUp', () => {
        const component = shallow(<SignUp />);
        let nodo = component.find('FormSignUp');
        expect(nodo.length).toEqual(1);
    });
});