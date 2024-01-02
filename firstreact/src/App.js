import React from "react";
import Contact from "./components/Contact";
import  {About} from "./components/About";
import Page from './components/Page';

function App() {
  return (
    <div className="container">
        <Contact/>
        <About/>
        <Page title="About me" content="I am Amit Negi" btn="Hello"/>
        <Page title="Know me" content="I am Rohit" btn="Hi"/>
    </div>
  );
}

export default App;
