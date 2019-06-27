import React from 'react'

function Label(props) {
    return (
        <label id={props.id} className='label' htmlFor={props.htmlFor}>
            {props.children}
        </label>
    )
}

Label.displayName = 'Label'

export default Label