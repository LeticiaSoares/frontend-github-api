import React from 'react'
import { storiesOf } from '@storybook/react'
import Table from './index'

storiesOf('Components/Table', module)
    .add('default', () =>(
        <Table>Children Here</Table>
    ))
