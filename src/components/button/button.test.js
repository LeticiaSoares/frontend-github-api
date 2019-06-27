import React from 'react'
import { shallow } from 'enzyme';
import Button from './index'
import 'jest-styled-components'

describe('<Button />', () => {
    it('should match default snapshot', () => {
        const component = shallow(<Button />)
        expect(component).toMatchSnapshot()
    })
    it('should have the right displayName', () => {
        expect(Button.displayName).toEqual('Button')
    })
})
