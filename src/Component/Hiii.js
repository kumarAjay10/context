import React from "react";

import {useContext} from "react";
import cricketContext from "../context/CricketContext";


const Hiii = ()=>{
    let name = useContext(cricketContext)
    
    
    
    return(
      <div>
          <h1>Welcome Crickters</h1>
          <p>Name is:{name}</p>
      </div>
    )
}

export default Hiii;