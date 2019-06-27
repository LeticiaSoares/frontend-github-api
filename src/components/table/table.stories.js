import React from 'react'
import { storiesOf } from '@storybook/react'
import Table from './index'

const commits = [
    'teste 1',
    'teste 2',
    'teste 3',
]
storiesOf('Components/Table', module)
    .add('default', () =>(
        <Table columns={['Teste 1','Teste 2','Teste 3']}>
            {commits && commits.map((item) => (
                <tr>
                    <td>{item}</td>
                    <td>{item}</td>
                     <td>{item}</td>
                </tr>
            ))}
        </Table>
    ))
