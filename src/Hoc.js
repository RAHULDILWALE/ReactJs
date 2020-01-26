import React, {Component} from 'react';
import Header from './Header';
import Fotter from './Fotter';
import Nav from './Nav';



export default function Hoc(HocComponent){
    return class extends Component{
        render(){
            return (
                <div>
                     <Nav/>
                    <Header></Header>
                    <HocComponent></HocComponent>
          
                </div>

            );
        }
    } 
}