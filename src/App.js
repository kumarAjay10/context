import React from "react";
import Hello from "./Component/Hello.js"
import Hiii from "./Component/Hiii.js";
import CricketProvider from "./context/CricketerProvider.js"




const App = ()=>{


  return(
    <div>
     
     {/* <Hiii/>
     <hr/> */}

      <CricketProvider>
     
      <Hello/>
      </CricketProvider>
    </div>
  )
}

export default App;