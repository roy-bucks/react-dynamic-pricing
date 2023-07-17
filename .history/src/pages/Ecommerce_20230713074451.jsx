import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";


const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="container">
      <div className="row"> 
        <div className=" bg-danger col-md-12">
          <h1>Hello World</h1>
          </div> 
      </div>
    </div>
  );
};

export default Ecommerce;
