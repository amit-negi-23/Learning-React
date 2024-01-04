import React from "react";
import { useState } from "react";
import ChildCompo2 from "./components/ChildCompo2";

function App() {
    const [name , setname] = useState()
    const [email, setEmail] = useState()
    const [data, setData] = useState({})

    function handleName(event){
      setname(event.target.value)
    }

    function handleEmail(event){
      setEmail(event.target.value)
    }
   function handleSubmit(event){
    event.preventDefault()
      console.log(name)
      console.log(email)
      setData({name:name, email:email})
   }
  return (
    <div className="container">
           <div>
              <form onSubmit={handleSubmit}>
                    <input type="text" name="name" onChange={handleName} placeholder="enter name"/>
                    <input type="text" name="email" onChange={handleEmail} placeholder="enter email"/>
                    <button>Submit</button>
              </form>
           </div>
    {/* passing data to child component*/}
        <ChildCompo2 data ={data}/>
    </div>
  );
}

export default App;
