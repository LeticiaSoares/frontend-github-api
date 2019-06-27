import React from 'react'
import styled from 'styled-components'

const Loading = styled(({className,...restProps})=>(
    <svg className={className} viewBox="25 25 50 50" {...restProps}>
        <circle cx="50" cy="50" r="20"></circle>
    </svg>
))`
    transform-origin: center;
    animation: rotate 2s linear infinite;
    display:block;
    margin: 0 auto;
    circle {
      fill: none;
      stroke: #fc2f70;
      stroke-width: 2;
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
    
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
      }
      100% {
        stroke-dashoffset: -125px;
      }
    }
`

Loading.displayName = 'Loading'

export default Loading