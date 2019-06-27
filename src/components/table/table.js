import React from 'react'
import styled from 'styled-components'

const Table = styled(({className,columns, children}) => (
    <table className={className}>
        <thead>
            <tr className='table__titles'>
                {columns && columns.map((item)=>(
                     <th>{item}</th>
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
    width: 100%;
    border: 1px solid #ddd;
    overflow-y: scroll;
    display: block;
    .table__titles {
        color: #ad2525;
        font-weight: 700;
        background-color: #f2f2f2;
     }
     th, td {
        text-align: left;
         padding: 8px;
     }
     tr:nth-child(even){background-color: #f2f2f2}
`

export default Table