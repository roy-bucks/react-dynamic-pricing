import React, { useState } from "react";
import { Select, Space } from 'antd';
import { Checkbox } from 'antd'
import { Table } from 'antd';



const SkuMng = () => {


  const vendorsData = ['Lorem', 'Ipsum'];
  const webpconvalueData = {
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
      dataIndex: 'convalue',
      key: '',
    },
    {
      title: 'Total attributes',
      dataIndex: 'totalattr',
      key: 'totalattr',
    },
    {
      title: 'Date updated',
      dataIndex: 'dateupt',
      key: 'dateupt',
    },
  ];
  const data = [
    {
      key: 1,
      name: 'John Brown',
      convalue: 32,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      convalue: 42,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Not Expandable',
      convalue: 29,
      address: 'Jiangsu No. 1 Lake Park',
      description: 'This not expandable',
    },
    {
      key: 4,
      name: 'Joe Black',
      convalue: 32,
      address: 'Sydney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    },
  ];


  const [vendor, setVendor] = useState(webpconvalueData[vendorsData[0]]);
  const [secondCity, setSecondCity] = useState(webpconvalueData[vendorsData[0]][0]);
  
  const handleVendorChange = (value) => {
    setVendor(webpconvalueData[value]);
    setSecondCity(webpconvalueData[value][0]);
  };
  const onSecondWebpconvalueChange = (value) => {
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
              onChange={onSecondWebpconvalueChange}
              placeholder="Select a web pconvalue"
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
                    {record.description}
                  </p>
                ),
                rowExpandable: (record) => record.name !== 'Not Expandable',
              }}
              dataSource={data}
            />
       </div>


    </div>

  </div>



  );
};

export default SkuMng;
