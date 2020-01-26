import React, {Component} from 'react';
const excelToJson = require('convert-excel-to-json');
 



 
class BulkUpload extends Component {
 
    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
          }
       
      }
      
      
    onChangeHandler=event=>{
        console.log((event.target.files[0]).name)
        this.setState({
          selectedFile: (event.target.files[0]).name,
          loaded: 0,
        })

        const result = excelToJson({
          sourceFile: this.state.selectedFile
      });

 

      }
    render() {
 
        return (
            <div >
              <h1 style ={{"text-align" : "center",color : "black"}} >Bulk Upload</h1>
               <form style ={{width : "40%",heigth : "40%", "border" : "red" , "margin-left" : "45%", "margin-top" : "6%"}}>
                <label>Upload File</label>
               <input type="file" name="file" onChange={this.onChangeHandler}/>
               <br></br>
               <button style ={{width : "90px"}} type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 

               </form>
             


            </div>
        );
    }
}
 
export default BulkUpload;




