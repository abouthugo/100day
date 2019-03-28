import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  padding: 0 10px;
  border-bottom: 1px solid black;
  color: tomato;
`
const App = (props) => <Title>{props.msg}</Title>
App.propTypes = {
  msg: PropTypes.string.isRequired
}

export default App
  