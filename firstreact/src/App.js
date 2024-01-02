import React from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  return (
    <div className="container">
        <Counter content ="This is paragraph" />
        <Form/>
    </div>
  );
}

export default App;
