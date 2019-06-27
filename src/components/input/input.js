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
    getValue = () => {
        return this.value
    }
    hasError = () => {
        if(this.state.message === null || this.state.message !== ''){
            return true
        }else{
            return false
        }
    }
    handleChange = (e) => {
        this.value = e.target.value
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let message = ''
        if(this.props.required && this.value.trim() === ''){
            message = 'Campo Obrigatório'
        }else if(this.value && this.props.minLength && this.value.length < (this.props.minLength)){
            message = `Digite pelo menos ${this.props.minLength} caracteres`
        }else if(this.props.type==='email' && !regex.test(this.value)){
            message= 'Digite um email válido'
        }
        this.setState({ message : message  },this.props.onChange(e))

    }
    render() {
        const { className,value } = this.props
        return (
            <div className={className}>
                <input
                    onChange={this.handleChange}
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


