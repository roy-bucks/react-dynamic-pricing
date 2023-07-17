import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Select, Space } from 'antd';



const SkuMng = () => {


  const vendorsData = ['Zhejiang', 'Jiangsu'];
  const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };


  const [vendor, setVendor] = useState(cityData[vendorsData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[vendorsData[0]][0]);
  
  const handleVendorChange = (value) => {
    setVendor(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondWebpageChange = (value) => {
    setSecondCity(value);
  };


  return (

   <div className="container"> 



    <div className="row p-2"> 

       <div className ="col-md-12 shadow p-5 bg-white "> 
        <div className="d-flex jutsify-content-start">
          <Space wrap>
            <Select
              // defaultValue={vendorsData[0]}
              style={{
                width: 180,
              }}
              placeholder="Select a vendor"
              onChange={handleVendorChange}
              options={vendorsData.map((province) => ({
                label: province,
                value: province,
              }))}
            />
            <Select
              style={{
                width: 180,
              }}
              // value={secondCity}
              onChange={onSecondWebpageChange}
              placeholder="Select a web page"
              options={vendor.map((city) => ({
                label: city,
                value: city,
              }))}
            />
          </Space>
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
