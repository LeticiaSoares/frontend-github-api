import React from 'react'
import { storiesOf } from '@storybook/react'
import Title from './index'

storiesOf('Components/Title', module)
    .add('default', () =>(
        <Title>Children Here</Title>
    ))
