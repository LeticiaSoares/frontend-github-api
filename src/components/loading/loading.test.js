import React from 'react'
import { shallow } from 'enzyme';
import Loading from './index'
import 'jest-styled-components'

describe('<Loading />', () => {
    it('should match default snapshot', () => {
        const component = shallow(<Loading />)
        expect(component).toMatchSnapshot()
    })
    it('should have the right displayName', () => {
        expect(Loading.displayName).toEqual('Loading')
    })
})
