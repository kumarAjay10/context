import React, { createContext } from "react";

// createContext is an empty object where we can access globally 
// let obj = createContext;
   let cricketContext = createContext();

//    console.log(cricketContext);


   export default cricketContext;





   /*
    cricketContext{
        Provider:component   it is used to add value for the object
        consumer:component   it is used to access the value

        this are inbuilt created by createcontext
    }


    <cicketContext.Provider/>



   */