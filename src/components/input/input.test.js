import React from 'react'
import { shallow } from 'enzyme';
import Input from './index'
import 'jest-styled-components'

describe('<Input />', () => {
    it('should match default snapshot', () => {
        const component = shallow(<Input />)
        expect(component).toMatchSnapshot()
    })
    it('should have the right displayName', () => {
        expect(Input.displayName).toEqual('Input')
    })
})
