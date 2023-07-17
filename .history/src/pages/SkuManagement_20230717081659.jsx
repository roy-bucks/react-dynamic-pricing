import React, { useState } from "react";
import { Select, Space } from 'antd';
import { Checkbox } from 'antd'
import { Table } from 'antd';



const SkuMng = () => {


  const vendorsData = ['Lorem', 'Ipsum'];
  const webpageData = {
    Lorem: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Ipsum: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };


  const [vendor, setVendor] = useState(webpageData[vendorsData[0]]);
  const [secondCity, setSecondCity] = useState(webpageData[vendorsData[0]][0]);
  
  const handleVendorChange = (value) => {
    setVendor(webpageData[value]);
    setSecondCity(webpageData[value][0]);
  };
  const onSecondWebpageChange = (value) => {
    setSecondCity(value);
  };

  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };


  return (

   <div className="container"> 



    <div className="row p-2"> 

       <div className ="col-md-12 shadow p-4 bg-white "> 
        <div className="d-flex jutsify-content-start">
          <Space wrap>
            <Select
              // defaultValue={vendorsData[0]}
              style={{
                width: 180,
              }}
              placeholder="Select a vendor"
              onChangeSettings={handleVendorChange}
              options={vendorsData.map((e) => ({
                label: e,
                value: e,
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

        <div className="mt-3"> 
          <Checkbox.Group
            style={{
              width: '100%',
            }}
            onChange={onChange}
                >
            <div className="row">
              <div>
                <Checkbox value="A">Hide Idential values</Checkbox>
                <Checkbox value="B" className="ms-3">Expand all</Checkbox>
                <Checkbox value="C" className="ms-3">Hide pricing data</Checkbox>
              </div>
            </div>
          </Checkbox.Group>
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
