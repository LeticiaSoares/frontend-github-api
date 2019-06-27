import React from 'react'
import { shallow } from 'enzyme';
import Table from './index'
import 'jest-styled-components'

describe('<Table />', () => {
    it('should match default snapshot', () => {
        const component = shallow(<Table />)
        expect(component).toMatchSnapshot()
    })
    it('should have the right displayName', () => {
        expect(Table.displayName).toEqual('Table')
    })
})
