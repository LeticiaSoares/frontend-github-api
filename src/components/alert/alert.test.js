import React from 'react'
import { shallow } from 'enzyme';
import Alert from './index'
import 'jest-styled-components'

describe('<Alert />', () => {
    it('should match default snapshot', () => {
        const component = shallow(<Alert />)
        expect(component).toMatchSnapshot()
    })
    it('should have the right displayName', () => {
        expect(Alert.displayName).toEqual('Alert')
    })
})
