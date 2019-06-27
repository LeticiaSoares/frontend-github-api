import styled, { css } from 'styled-components'

const Button = styled.button`
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    background: #FF5A49;
    border: 1px solid #FF5A49;
    border-radius: 5px;
    ${({disabled}) => disabled && css`
        color: gray;
        background: lightgrey;
        border-color: lightgrey;
    `}
     : hover  {
        border-color: #565656;
        color: #333333;
     }
 `

Button.displayName = 'Button'

export default Button