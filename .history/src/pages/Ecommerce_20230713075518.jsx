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

  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-danger rounded-3xl">
    <Header category="Page" title="Orders" />

<h1>Okay This is it </h1>


  </div>



  );
};

export default Ecommerce;
