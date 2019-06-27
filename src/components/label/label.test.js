import React from 'react'
import { shallow } from 'enzyme';
import Label from './index'
import 'jest-styled-components'

describe('<Label />', () => {
    it('should match default snapshot', () => {
        const component = shallow(<Label />)
        expect(component).toMatchSnapshot()
    })
    it('should have the right displayName', () => {
        expect(Label.displayName).toEqual('Label')
    })
})
