import React, { Component } from "react";

export default class Sorting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username : " ", date : new Date().toLocaleString(),   data :[
          {
            name: 'Charde Marshall',
            position: 'Regional Director',
            office: 'San Francisco',
            age: '36',
            date: '2008/10/16',
            salary: '$470'
          },
          {
            name: 'Haley Kennedy',
            position: 'Senior Marketing Designer',
            office: 'London',
            age: '43',
            date: '2012/12/18',
            salary: '$313'
          },
          {
            name: 'Tatyana Fitzpatrick',
            position: 'Regional Director',
            office: 'London',
            age: '19',
            date: '2010/03/17',
            salary: '$385'
          },
          {
            name: 'Michael Silva',
            position: 'Marketing Designer',
            office: 'London',
            age: '66',
            date: '2012/11/27',
            salary: '$198'
          },
        
       
          {
            name: 'Caesar Vance',
            position: 'Pre-Sales Support',
            office: 'New York',
            age: '21',
            date: '2011/12/12',
            salary: '$106'
          },
          {
            name: 'Doris Wilder',
            position: 'Sales Assistant',
            office: 'Sidney',
            age: '23',
            date: '2010/09/20',
            salary: '$85'
          },
          {
            name: 'Angelica Ramos',
            position: 'Chief Executive Officer (CEO)',
            office: 'London',
            age: '47',
            date: '2009/10/09',
            salary: '$1'
          },
          {
            name: 'Gavin Joyce',
            position: 'Developer',
            office: 'Edinburgh',
            age: '42',
            date: '2010/12/22',
            salary: '$92'
          },
          {
            name: 'Jennifer Chang',
            position: 'Regional Director',
            office: 'Singapore',
            age: '28',
            date: '2010/11/14',
            salary: '$357'
          },
          {
            name: 'Brenden Wagner',
            position: 'Software Engineer',
            office: 'San Francisco',
            age: '28',
            date: '2011/06/07',
            salary: '$206'
          },
          {
            name: 'Fiona Green',
            position: 'Chief Operating Officer (COO)',
            office: 'San Francisco',
            age: '48',
            date: '2010/03/11',
            salary: '$850'
          },
          {
            name: 'Shou Itou',
            position: 'Regional Marketing',
            office: 'Tokyo',
            age: '20',
            date: '2011/08/14',
            salary: '$163'
          },
          {
            name: 'Michelle House',
            position: 'Integration Specialist',
            office: 'Sidney',
            age: '37',
            date: '2011/06/02',
            salary: '$95'
          },
          {
            name: 'Suki Burks',
            position: 'Developer',
            office: 'London',
            age: '53',
            date: '2009/10/22',
            salary: '$114'
          },
          {
            name: 'Prescott Bartlett',
            position: 'Technical Author',
            office: 'London',
            age: '27',
            date: '2011/05/07',
            salary: '$145'
          },
          {
            name: 'Gavin Cortez',
            position: 'Team Leader',
            office: 'San Francisco',
            age: '22',
            date: '2008/10/26',
            salary: '$235'
          },
          {
            name: 'Martena Mccray',
            position: 'Post-Sales support',
            office: 'Edinburgh',
            age: '46',
            date: '2011/03/09',
            salary: '$324'
          },
          {
            name: 'Unity Butler',
            position: 'Marketing Designer',
            office: 'San Francisco',
            age: '47',
            date: '2009/12/09',
            salary: '$85'
          },
          {
            name: 'Howard Hatfield',
            position: 'Office Manager',
            office: 'San Francisco',
            age: '51',
            date: '2008/12/16',
            salary: '$164'
          },
          {
            name: 'Hope Fuentes',
            position: 'Secretary',
            office: 'San Francisco',
            age: '41',
            date: '2010/02/12',
            salary: '$109'
          },
          {
            name: 'Vivian Harrell',
            position: 'Financial Controller',
            office: 'San Francisco',
            age: '62',
            date: '2009/02/14',
            salary: '$452'
          },
          {
            name: 'Timothy Mooney',
            position: 'Office Manager',
            office: 'London',
            age: '37',
            date: '2008/12/11',
            salary: '$136'
          },
          {
            name: 'Jackson Bradshaw',
            position: 'Director',
            office: 'New York',
            age: '65',
            date: '2008/09/26',
            salary: '$645'
          },
          {
            name: 'Olivia Liang',
            position: 'Support Engineer',
            office: 'Singapore',
            age: '64',
            date: '2011/02/03',
            salary: '$234'
          },
          {
            name: 'Bruno Nash',
            position: 'Software Engineer',
            office: 'London',
            age: '38',
            date: '2011/05/03',
            salary: '$163'
          },
          {
            name: 'Sakura Yamamoto',
            position: 'Support Engineer',
            office: 'Tokyo',
            age: '37',
            date: '2009/08/19',
            salary: '$139'
          },
          {
            name: 'Thor Walton',
            position: 'Developer',
            office: 'New York',
            age: '61',
            date: '2013/08/11',
            salary: '$98'
          },
          {
            name: 'Finn Camacho',
            position: 'Support Engineer',
            office: 'San Francisco',
            age: '47',
            date: '2009/07/07',
            salary: '$87'
          },
          {
            name: 'Serge Baldwin',
            position: 'Data Coordinator',
            office: 'Singapore',
            age: '64',
            date: '2012/04/09',
            salary: '$138'
          },
          {
            name: 'Zenaida Frank',
            position: 'Software Engineer',
            office: 'New York',
            age: '63',
            date: '2010/01/04',
            salary: '$125'
          },
          {
            name: 'Zorita Serrano',
            position: 'Software Engineer',
            office: 'San Francisco',
            age: '56',
            date: '2012/06/01',
            salary: '$115'
          },
          {
            name: 'Jennifer Acosta',
            position: 'Junior Javascript Developer',
            office: 'Edinburgh',
            age: '43',
            date: '2013/02/01',
            salary: '$75'
          },
          {
            name: 'Cara Stevens',
            position: 'Sales Assistant',
            office: 'New York',
            age: '46',
            date: '2011/12/06',
            salary: '$145'
          },
          {
            name: 'Hermione Butler',
            position: 'Regional Director',
            office: 'London',
            age: '47',
            date: '2011/03/21',
            salary: '$356'
          },
          {
            name: 'Lael Greer',
            position: 'Systems Administrator',
            office: 'London',
            age: '21',
            date: '2009/02/27',
            salary: '$103'
          },
          {
            name: 'Jonas Alexander',
            position: 'Developer',
            office: 'San Francisco',
            age: '30',
            date: '2010/07/14',
            salary: '$86'
          },
          {
            name: 'Shad Decker',
            position: 'Regional Director',
            office: 'Edinburgh',
            age: '51',
            date: '2008/11/13',
            salary: '$183'
          },
          {
            name: 'Michael Bruce',
            position: 'Javascript Developer',
            office: 'Singapore',
            age: '29',
            date: '2011/06/27',
            salary: '$183'
          },
          {
            name: 'Donna Snider',
            position: 'Customer Support',
            office: 'New York',
            age: '27',
            date: '2011/01/25',
            salary: '$112'
          }
        ]
      };
    this.handleChange = this.handleChange.bind(this)
    


    
    
    this.sort = this.sort.bind(this)

    

  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      date: new Date().toLocaleString()
    });
  }



  sort(event,value){


 var sortedData = this.state.data.sort((a, b) => (a.age > b.age) ? 1 : -1)
 console.log(sortedData)

    this.setState({data : sortedData})
  }
  handleChange(event){
    this.setState({[event.target.name] : event.target.value})
   


  let currentList = [];
      // Variable to hold the filtered list before putting into state
  let newList = [];

      // If the search bar isn't empty
  if (event.target.value !== "") {
          // Assign the original list to currentList
    currentList = this.state.data;

          // Use .filter() to determine which items should be displayed
          // based on the search terms
    newList = currentList.filter(item => {

     const {name} = {...item};
     console.log("name" + name)
     
              // change current item to lowercase
      const lc = name.toLowerCase();
      console.log(lc)
              // change search term to lowercase
      const filter = event.target.value.toLowerCase();
      console.log(filter)
              // check to see if the current list item includes the search term
              // If it does, it will be added to newList. Using lowercase eliminates
              // issues with capitalization in search terms and search content
      return lc.includes(filter);
    });
  } else {
          // If the search bar is empty, set newList to original task list
    newList = this.state.data;
  }
      // Set the filtered state based on what our rules added to newList
  this.setState({
    data: newList
  });



 }

  render() {

    var data = "Guest User"
    if(window.name1){
      data = "Welcome  " + window.name1

    }

    return (
      <div style={{ float: "center" }}>
          
    <h1 style={{ "text-align": "center", color: "black" }}>{data}</h1>
    <h1 style={{ "text-align": "right", color: "black" }}><h1>Current Time is : </h1><strong >{this.state.date}</strong></h1>

        
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={event => this.handleChange(event)}
            placeholder="Enter User Name"
          />
        <table class="table table-dark">
          <thead>
          
              <tr>
              <th><button>Name</button></th>
              <th><button type = "Submit" style = {{float : "right"}} onClick= {(event)=>this.sort(event,'age')}>Age </button>
</th>
              <th>Position</th>
            
              </tr>
             
          
          </thead>
          <tbody>
          {this.state.data.map((data1,index )=>

            
     
<tr key={data1.name}>
  <td> {data1.name}</td>
<td>{data1.age}</td>
<td>{data1.position}</td>

</tr>


)
  }
          </tbody>
        </table>
      

    
         
  

  
      </div>
    );
  }
}
