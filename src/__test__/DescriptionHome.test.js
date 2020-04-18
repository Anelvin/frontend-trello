import React from 'react';
import DescriptionHome from '../components/DescriptionHome/DescriptionHome';
import { shallow } from 'enzyme';

describe('DescriptionHome', () => {

    let component;

    beforeEach(() => component = shallow(<DescriptionHome />));

    it('should show one class body-description-home', () => {
        const component = shallow(<DescriptionHome />);
        let nodo = component.find('.body-description-home');
        expect(nodo.length).toEqual(1);
    });

    it('should show one class details-description-home', () => {
        const component = shallow(<DescriptionHome />);
        let nodo = component.find('.details-description-home');
        expect(nodo.length).toEqual(1);
    });

    it('should show one class description-home', () => {
        const component = shallow(<DescriptionHome />);
        let nodo = component.find('.description-home');
        expect(nodo.length).toEqual(1);
    });

    it('should show one tag h1', () => {
        const component = shallow(<DescriptionHome />);
        let nodo = component.find('h1');
        expect(nodo.length).toEqual(1);
        expect(nodo.text()).toEqual(`Trello le permite trabajar de forma más colaborativa y ser más productivo.`)
    });

    it('should show one tag form', () => {
        const component = shallow(<DescriptionHome />);
        let nodo = component.find('form');
        expect(nodo.length).toEqual(1);
    });

    it('should show one tag input', () => {
        const component = shallow(<DescriptionHome />);
        let nodo = component.find('input');
        expect(nodo.length).toEqual(1);
    });

    it('should show one tag button', () => {
        const component = shallow(<DescriptionHome />);
        let nodo = component.find('button');
        expect(nodo.length).toEqual(1);
    });
});