import React, { Component } from "react";
import Search from "./search/Search"; 
class Contact extends Component {
  state={
    ehr:[]
  }
  getName = async(e)=>{
    const search = e.target.elements.searchName.value;
    e.preventDefault();
    console.log(search);
    //const api_call=await fetch('https://data-asg.goldprice.org/dbXRates/USD');
    //const data =await api_call.json();
    var data = ['Hello']
    this.setState({ehr:data});

    console.log(this.state.ehr);
  }
  render() {
    return (
      <div>
        <h2>GET RECORDS</h2>
        
        <Search getName={this.getName}/>
      </div>
    );
  }
}
 
export default Contact;