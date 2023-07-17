import React, { useState } from "react";
import { Select, Space } from 'antd';
import { Checkbox } from 'antd'
import { Table } from 'antd';



const SkuMng = () => {


  const vendorsData = ['Lorem', 'Ipsum'];
  const webpconflict_valueData = {
    Lorem: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Ipsum: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };



  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Conflict value',
      dataIndex: 'conflict_value',
      key: '',
    },
    {
      title: 'Total attributes',
      dataIndex: 'total_attr',
      key: 'total_attr',
    },
    {
      title: 'Date updated',
      dataIndex: 'date_updated',
      key: 'date_updated',
    },
  ];
  const data = [
    {
      key: 1,
      name: 'John Brown',
      conflict_value: 32,
      total_attr: 'New York No. 1 Lake Park',
      date_updated: 'Jan 10 2023',
    },
    {
      key: 2,
      name: 'Jim Green',
      conflict_value: 42,
      total_attr: 'London No. 1 Lake Park',
      date_updated: 'Jan 10 2023',
    },
    {
      key: 3,
      name: 'Not Expandable',
      conflict_value: 29,
      total_attr: 'Jiangsu No. 1 Lake Park',
      date_updated: 'Jan 10 2023',
    },
    {
      key: 4,
      name: 'Joe Black',
      conflict_value: 32,
      total_attr: 'Sydney No. 1 Lake Park',
      date_updated: 'Jan 10 2023',
    },
  ];


  const [vendor, setVendor] = useState(webpconflict_valueData[vendorsData[0]]);
  const [secondCity, setSecondCity] = useState(webpconflict_valueData[vendorsData[0]][0]);
  
  const handleVendorChange = (value) => {
    setVendor(webpconflict_valueData[value]);
    setSecondCity(webpconflict_valueData[value][0]);
  };
  const onSecondWebpconflict_valueChange = (value) => {
    setSecondCity(value);
  };

  const onChangeSettings = (checkedValues) => {
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
              onChange={handleVendorChange}
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
              onChange={onSecondWebpconflict_valueChange}
              placeholder="Select a web pconflict_value"
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
            onChange={onChangeSettings}
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


       
       <div className ="col-md-12 shadow p-4 mt-3 bg-white "> 
           <Table
              
              columns={columns}
              expandable={{
                expandedRowRender: (record) => (
                  <p
                    style={{
                      margin: 0,
                    }}
                  >
                    {record.date_updated}
                  </p>
                ),
                rowExpandable: (record) => record.name !== 'Not Expandable',
              }}
              dataSource={data}
              pagination = {false}
            />
       </div>


    </div>

  </div>



  );
};

export default SkuMng;
