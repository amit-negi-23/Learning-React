import React, { Component } from 'react'

export default class UserDetail extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: window.location.href.split('/')[4],
            data:null
        }
    }

    componentDidMount(){
        fetch('https://dummyjson.com/users/'+this.state.id).then(response=>response.json()).then(data=>this.setState({data:data}))
    }
    render() {
      console.log(this.state.data)
    return (
      <div>
            {/* <h1>{this.state.id}</h1> */}
           <div className='row'>
                  {(this.state.data!=null)?<div className='col-lg-8 border mt-4 p-2'>
                              <div className='d-flex justify-content-around'>
                                  <img src={this.state.data.image} alt="cat-img"/>
                                  <div>
                                  <h1>{this.state.data.firstName + ' '+ this.state.data.lastName}</h1>
                                  <p>Email:-{this.state.data.email}</p>
                                  <p>D.O.B:-{this.state.data.birthDate}</p>
                                  <p>Phone:-{this.state.data.phone}</p>
                                  <p>Address;-{this.state.data.address.address+' '+this.state.data.address.city}</p>
                                  <p>Bank card no:-{this.state.data.bank.cardNumber}</p>
                                  </div>
                                    
                              </div>
                          </div>:"Loading"}
            </div> 
    
      </div>
    )
  }
}
