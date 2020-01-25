import React, { Component } from "react";
import axios from 'axios' 
class Stuff extends Component {
   state={
    file:null
  }
  handleFile(e){
    let file=e.target.files[0]
    this.setState({file:file})
    console.log("file selected")
  }
  handleUpload(e){
    console.log("entered upload")
    let file =this.state.file
    let formdata=new FormData()
    formdata.append('image',file)
    formdata.append('image',file)
    formdata.append('name','Vishal')
    axios({
      url: "http://localhost:3000/",
      method: 'POST',
      headers:{
        authorization:'123'
      },
      data:formdata
    })
    console.log("upload complete")
  }
  
  render() {
    return (
      <div>
        <h2>Upload Patien Data</h2>
        <form>
          <div>
            <label>Select File</label>
            <input type="file" name="file" onChange={(e)=>this.handleFile(e)}/>
          </div>
          <button>Upload</button>
        </form>
      </div>
    );
  }
}
 
export default Stuff;