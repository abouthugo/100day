import React, { Component } from 'react';
import styled from 'styled-components';

const InputSkin = styled.div`
  width: 100%;
  font-size: 18px;
  height: 36px;
  position: relative;
  border-bottom: 2px solid #E7E8EB;
  padding: 0;
  transition: all 0.4s;
  margin: 10px 0;
  &::before{
    content: "";
    position: absolute;
    height: 2px;
    width: ${props => props.active ? "100%" : "0%"};
    background: #5A52FF;
    bottom: -2px;
    left: 0;
    transition: all 0.3s;
    ${props => props.triggered && `
      animation: move 1s 2 linear;
  `}
  }

  @keyframes move {
    0%{
      width: 10%;
      left: 0;
    }
    50%{
      width: 20%;
      left: 50%;
    }
    90%{
      width: 10%;
      left: 90%;
    }
    100%{
      width: 0%;
      left: 100%;
    }
  }
`

const StyledInput = styled.input`
  width: 100%;
  border: none;
  position: relative;
  background: transparent;
  height: 36px;
  -webkit-appearance: none;
  transition: all 0.2s;
  &:focus{
    outline: none;
  }
`

export default class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      active: false
    }
  }

  onChange = ({ target }) => {
    this.setState({
      value: target.value
    });
  }
  
  handleFocus = () => {
    this.setState({
      active: true
    })
  }

  handleBlur = () => {
    this.setState({
      active: false
    })
  }

  render() {
    const {active} = this.state;
    const {type, placeholder, triggered} = this.props;
    return (
      <InputSkin active={active} triggered={triggered}>
        <StyledInput 
        type={type} 
        onChange={this.onChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        placeholder={!active && placeholder}
        />
      </InputSkin>
    )
  }

}