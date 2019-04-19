import styled from 'styled-components';

const Button = styled.button`
  background: #5A52FF;
  padding: 10px 30px;
  color: white;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 5px;
  margin: 40px auto;
  cursor: pointer;
  &:active{
    background: #665ff2;
  }
  &:focus{
    outline: none;
  }
`
export default Button;