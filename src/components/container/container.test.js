import React from 'react'
import { shallow } from 'enzyme';
import Container from './index'
import 'jest-styled-components'

describe('<Container />', () => {
    it('should match default snapshot', () => {
        const component = shallow(<Container />)
        expect(component).toMatchSnapshot()
    })
    it('should have the right displayName', () => {
        expect(Container.displayName).toEqual('Container')
    })
})
