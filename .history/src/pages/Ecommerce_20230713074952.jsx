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

    <div className="mt-2">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <h1>Hello world</h1>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Ecommerce;
