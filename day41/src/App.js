import React, { Component } from 'react';
import styled from 'styled-components'
import Input from './components/Input';
import Button from './components/Button';
import SubmitContainer from './container/submit.container';


const Layout = styled.main`
  display: flex;
  flex-flow: column nowrap;
  width: 80%;
  margin: 20px auto;
  /* justify-content: center; */
  align-items: center;
  h1 {
    letter-spacing: 2px;
  }
`

const Card = styled.div`
  background: white;
  padding: 10px 15px;
  width: 50%;
  border: 1px solid transparent;
  border-radius: 10px;
  margin: 0 0 10px 0;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(71, 71, 71, 0.1);
`


class App extends Component {
  render() {
    return (
      <Layout>
        <Card>
          <h1>Sign Up Today</h1>
          <SubmitContainer />
        </Card>
      </Layout>
    );
  }
}

export default App;
