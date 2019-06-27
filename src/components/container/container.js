import React from 'react'
import styled from 'styled-components'

const Container = styled(({className,children}) => (
     <div className={className}>
            {children}
     </div>
))`
    padding: 0.75rem 1rem 0;
    @media (min-width: 768px) {
        padding: 1.5rem 20% 0;
    }
    @media (min-width: 992px) {
         padding: 2.25rem 30% 0;
    }
`

Container.displayName = 'Container'

export default Container