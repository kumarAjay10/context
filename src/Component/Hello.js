import {useContext} from "react";
import cricketContext from "../context/CricketContext";


const Hello = ()=>{
    // let name = useContext(cricketContext)
    let {cricketer,setCricketer} = useContext(cricketContext)

    function updateAge(){
      setCricketer({...cricketer, age:cricketer.age + 1})
    }

    // console.log(name);
    
    
                     // name
    return(
      <div>         
          <h1>Welcome {cricketer.name}</h1> 
          {/* <p>Name is:{name}</p> */}
          <p>age :{cricketer.age}</p>
          <p>Country :{cricketer.Country}</p>
          <p>retired :{cricketer.retired}</p>
          <button onClick={updateAge}>update age</button>
      </div>
    )
}

export default Hello;