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

      <div className="flex flex-wrap lg:flex-nowrap p-2 bg-danger">
        <h1>Hello World</h1>
       <p>This is a test</p>
      </div>

  );
};

export default Ecommerce;
