import React, {Component} from 'react'
import Input from '../components/Input';
import Button from '../components/Button';

export default class SubmitContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      triggered: false
    }
  }

  handleClick = () => {
    this.setState({
      triggered: true
    }, () => {
      setTimeout(()=> {
        this.setState({
          triggered: false
        })
      }, 2000);
    })
  }

  render(){
    const {triggered} = this.state;
    return(
      <>
        <Input type="text" placeholder="Username"/>
        <Input type="password" placeholder="Password" triggered={triggered}/>
        <Button onClick={this.handleClick} on>Submit</Button>
      </>
    )
  }

}