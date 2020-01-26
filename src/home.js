import React from "react";

import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export default class Home extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (


                  <div style={{ 'margin-top' : '20px',"text-align": "center","backgroundcolor": "black", color: "black",'margin-left' : '300px','margin-right' : '300px','border': 'solid 2px red'}}>

        <h2 style={{ 'margin-top' : '20px'}}> Movies </h2>

        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
     
       

        <table  id="table-to-xls">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Display Image</th>
            </tr>
          </thead>
          <tbody>
           

            { this.state.persons.map(person =>  <tr><td>{person.id}</td>
            
            <td>{person.title}</td> 
            <td><a href ={person.url} target="_blank">Image</a></td>  </tr>)}

             
          
           
          </tbody>
        </table>

        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
      </div>
      
     
    );
  }
}
