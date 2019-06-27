import React from 'react'
import { shallow } from 'enzyme';
import Title from './index'
import 'jest-styled-components'

describe('<Title />', () => {
    it('should match default snapshot', () => {
        const component = shallow(<Title />)
        expect(component).toMatchSnapshot()
    })
    it('should have the right displayName', () => {
        expect(Title.displayName).toEqual('Title')
    })
})
