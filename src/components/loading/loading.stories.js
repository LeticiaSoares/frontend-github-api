import React from 'react'
import { storiesOf } from '@storybook/react'
import Loading from './index'

storiesOf('Components/Loading', module)
    .add('default', () =>(
        <Loading width='100px' height='100px' />
    ))
