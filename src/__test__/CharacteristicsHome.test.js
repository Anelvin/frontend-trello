import React from 'react';
import CharacteristicsHome from '../components/CharacteristicsHome/CharacteristicsHome';
import { shallow } from 'enzyme';

describe('CharacteristicsHome', () => {
    
    let component;

    beforeEach(() => component = shallow(<CharacteristicsHome />));

    it('should have one class body-characteristics-home', () => {
        const component = shallow(<CharacteristicsHome />);
        let nodo = component.find('.body-characteristics-home');
        expect(nodo.length).toEqual(1);
    });

    it('should have one class tasks-list', () => {
        const component = shallow(<CharacteristicsHome />);
        let nodo = component.find('.tasks-list');
        expect(nodo.length).toEqual(1);
    });

    it('should have one class block-list', () => {
        const component = shallow(<CharacteristicsHome />);
        let nodo = component.find('.block-list');
        expect(nodo.length).toEqual(2);
    });

    it('should have one class list', () => {
        const component = shallow(<CharacteristicsHome />);
        let nodo = component.find('.list');
        expect(nodo.length).toEqual(2);
    });

    it('should have five classes task', () => {
        const component = shallow(<CharacteristicsHome />);
        let nodo = component.find('.task');
        expect(nodo.length).toEqual(5);
    });

    it('should have five classes tag', () => {
        const component = shallow(<CharacteristicsHome />);
        let nodo = component.find('.tag');
        expect(nodo.length).toEqual(5);
    });

    it('should have five classes description-task', () => {
        const component = shallow(<CharacteristicsHome />);
        let nodo = component.find('.description-task');
        expect(nodo.length).toEqual(5);
    });

    it('should have one tag ul', () => {
        const component = shallow(<CharacteristicsHome />);
        let nodo = component.find('ul');
        expect(nodo.length).toEqual(1);
    });

    it('should have two tags h2', () => {
        const component = shallow(<CharacteristicsHome />);
        let nodo = component.find('h2');
        expect(nodo.length).toEqual(3);
    });
});