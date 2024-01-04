import React from "react";
import ChildComponent from './components/ChildComponent';
import DefaultForm from "./components/DefaultForm";
import Button from "./components/Button";
import ConditionalComponent from "./components/ConditionalComponent";

function App() {

    function handleButton(){
      console.log("readmore btn clicked")
    }
    function handleButton2(){
      console.log("register btn clicked")
    }
  return (
    <div className="container">
            {/* Task1 */}
            <ChildComponent title='Child component' para="This is a paragraph"/>

            {/* Task2*/}
            <DefaultForm registered={false}/>

            {/* Task 3*/}
            <Button title="Readmore" action ={handleButton}/>
            <Button title="register" action ={handleButton2}/>
            <Button title="empty btn" />
           
           {/* task3*/}
           <ConditionalComponent condition={false}/>

           
    </div>
  );
}

export default App;
