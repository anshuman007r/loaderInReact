import React, { Component } from 'react'
import'./App.css';
import {data} from './utils';
export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      data: [],
      loader: true
    };
  }
  componentDidMount()
  {
    setTimeout(() => {this.setState({
      data,
      loader: false
    })},2000);

  }
  getValue=()=>{
    return this.state.data.map((item) => {
      return(
        <>
          <p>Name: {item.name}</p>
          <p>Mobile: {item.mobile}</p>
        </>
      )
    });
  }
  render() {
  
    return (
      <div id="show" className="renderContent">
         {this.state.loader && (<p>Loading ...</p>)}
         <p>{this.getValue()}</p>
      </div>
    )
  }
}
