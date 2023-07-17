import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Select } from 'antd'; 



const SkuMng = () => {
  const { currentColor, currentMode } = useStateContext();

const provinceData = ['Zhejiang', 'Jiangsu'];

const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

type CityName = keyof typeof cityData; 



  return (

   <div className="container"> 



    <div className="row p-2"> 

       <div className ="col-md-12 shadow p-5 bg-white "> 
        <div className="d-flex jutsify-content-start">
            <Space wrap>
      <Select
        defaultValue={provinceData[0]}
        style={{ width: 120 }}
        onChange={handleProvinceChange}
        options={provinceData.map((province) => ({ label: province, value: province }))}
      />
      <Select
        style={{ width: 120 }}
        value={secondCity}
        onChange={onSecondCityChange}
        options={cities.map((city) => ({ label: city, value: city }))}
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
