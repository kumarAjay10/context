import react,{useState} from 'react';
import cricketContext from './CricketContext';



const CricketerProvider = (props)=>{

    let[cricketer,setCricketer]=useState({
       name:"Sachin Tendulkar",
       age:47,
       Country:"India",
       retired: "yes"
    })



    return(
        <div>
              <cricketContext.Provider value={{
                cricketer:cricketer,
                setCricketer:setCricketer
              }}>
                {props.children}
              </cricketContext.Provider>
        </div>
    )
}


export default CricketerProvider;








// let name = "Sachin Tendulkar"
//     return(
//         <div>
//               <cricketContext.Provider value={name}>
//                 {props.children}
//               </cricketContext.Provider>
//         </div>
//     )
// }