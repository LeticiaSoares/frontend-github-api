import React, { Component } from 'react'
import styled from 'styled-components'

class Input extends Component {
    constructor(props){
        super(props)
        this.state={
            message : null
        }
        this.value = ''
    }
    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            console.log('handleKeyPress')
            this.handleChange(e)
            this.props.onKeyPress()
        }
    }
    handleChange = (e) => {
        console.log('handleChange',e.target.value)
        this.value = e.target.value
        let message = ''
        if(this.props.required && this.value.trim() === '') {
            message = 'Campo Obrigatório'
        }
        this.setState({ message : message  },this.props.onChange(e))
    }
    render() {
        const { className,value } = this.props
        return (
            <div className={className}>
                <input
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleChange}
                    type={this.props.type}
                    id={this.props.id}
                    className='input'
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                    value={value}
                />
                <p className='input__erro'>{this.state.message}</p>
            </div>
        )
    }
}

const InputStyled = styled(Input)`
    .input {    
        font-size: 1rem;
        box-sizing: border-box;
        display: block;
        width: 100%;
        padding: 0.8rem;
        margin: 0 0 1rem;
        border: 1px solid black;
        border-radius: 5px;
    }
    .input:focus {
        outline: none;
        border-color: #FF5A49;
        box-shadow: 0 0 10px #FF5A49;
    }
    .input__erro {
        font-family: monospace;
        font-weight: 700;
        color: #FF5A49;
    }

`

InputStyled.displayName ='Input'

export default InputStyled


