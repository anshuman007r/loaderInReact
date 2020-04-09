import React, { Component } from 'react'
import'./App.css';
export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      data: [],
      mobile:[],
      loader: true
    };
  }
  componentDidMount()
  {
    setTimeout(() => {this.setState({
      data: ['Anshuman', 'Arpit', 'Shashwat'],
      mobile:['9912123456','9883125678','8787878787'],
      loader: false
    })},2000);

  }
  // displayDetail=(item,index1)=>{
  //    return(
  //      <p>{item}</p>
  //    )
  // }
  render() {
  
    return (
      <div id="show" className="renderContent">
         {this.state.loader && (<p>Loading ...</p>)}
         {this.state.data.map((items)=>(<p>Name:{items}</p>))}
      </div>
    )
  }
}
