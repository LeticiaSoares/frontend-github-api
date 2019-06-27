import React from 'react'
import styled from 'styled-components'

const Table = styled(({className,columns, children}) => (
    <table className={className}>
        <thead>
            <tr className='table__titles'>
                {columns && columns.map((item)=>(
                     <th key={}>{item}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
))`
    border-collapse: collapse;
    border-spacing: 0;
    overflow-y: scroll;
    display: block;
    .table__titles {
        color: #FF5A49;
        font-weight: 700;
        background-color: #f2f2f2;
     }
     th, td {
        width: 100%;
        text-align: left;
         padding: 8px;
     }
     a {
        color: #FF5A49;
        font-weight: 700;
     }
     tr:nth-child(even){background-color: #f2f2f2}
`

Table.displayName = 'Table'

export default Table