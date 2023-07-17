import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Select } from 'antd'; 



const SkuMng = () => {
  const { currentColor, currentMode } = useStateContext();

  return (

   <div className="container"> 



    <div className="row p-2"> 

       <div className ="col-md-12 shadow p-5 bg-white "> 
        <div>

        </div>   
       </div>


       
       <div className ="col-md-12 shadow p-5 mt-3 bg-white "> 
         <h1>Content Is here</h1>
       </div>


    </div>

  </div>



  );
};

export default SkuMng;
