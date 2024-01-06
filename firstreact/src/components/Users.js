import React, { Component } from 'react'
import User from './User'
export default class Users extends Component {

    constructor(props){
            super(props) //parent class constructor

            this.state ={
                date: null,
                message: 'Data is loading....'
            }
            // console.log("constructor")
          }
          
          componentDidMount(){
            //runs after render
            //call the Api
            // fetch the data
            //display the data
            
            
            fetch("https://dummyjson.com/users").then(response=>response.json()).then(data=>this.setState({data:data.users}))
            
            // console.log("Did Mount")
          }
          
          render() {
            //runs after constructor
            // console.log('Render')
            console.log(this.state.data)
            return (
              <div className='mt-4'>
                 <h2>Users</h2>
                 <div className='row'>
                    {(this.state.data!=null)?this.state.data.map((item)=><div key={item.id} className='col-md-2 mb-3'><User image={item.image} name={item.firstName + ' '+ item.lastName}/></div>):<div className='display-1'> {this.state.message}</div>}
                       
                        
                 </div>
        </div>
    )
  }
}
