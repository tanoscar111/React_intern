import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Button, Tooltip, Space,Select } from 'antd';
import {
  getCompanyListAction, 
  setPageCompanyTable, 
  activeCompanyAction,
  deleteCompanyAction,
} from '../../../redux/actions'
import Moment from 'react-moment';
import moment from 'moment'


function TestTable(props) {
  const { Option } = Select;
  const {
    companyList, 
    pagination,
    getCompanyList, 
    setPage, 
    updataOrg,
    activeCompany,
    deleteCompany, 
    showEdit,
    keySearch,
    extendCompany,
    } = props;
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const columns = [
    {
      title: 'Name',
      width: 200,
      defaultSortOrder: 'descend',
      ellipsis: {
        showTitle: false,
      },
      render: (record) =>(
        <Tooltip placement="topLeft" color={'yellow'} title={record.name}>
        <a href={record.website} target="_blank">{record.name}</a>
      </Tooltip>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: address => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      width: 120
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: email => (
        <Tooltip placement="topLeft" title={email}>
          {email}
        </Tooltip>
      ),
    },
    {
      title: 'Status',
      width: 80,
      align: 'center',
      render: (record) =>(
        <Space size="middle">
          <Button block onClick={()=>onActiveOrgan(record)} type="primary">{record.status ? "Active" : "Block"}</Button>
        </Space>
      ),    
    },
    {
      title: 'Expires',
      width: 230,
      align: 'center',
      render: (record) =>(
        <Space size="middle">
          <Moment date={moment(record.startDay).add(record.expiryDate,'M')}  format="DD/MM/YYYY"/>
          <Select defaultValue="--Time--" style={{ width: 120 }} onChange={(value)=>handleChange(value, record.key)}>
            <Option value="3">3 Month</Option>
            <Option value="6">6 Month</Option>
            <Option value="12">1 Year</Option>
          </Select>
        </Space>
      ),
    },
    {
      title: 'Action',
      align: 'center',
      render: (record) =>(
        <Space size="middle">
          <Button onClick={()=>showEdit(record)} type="primary">Edit</Button>
          <Button onClick={()=>onDeleteOrgan(record)} type="danger">Delete</Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getCompanyList(pagination, keySearch);
  }, []);

   const handleTableChange = (pagination) => {
   setPage(pagination);
   getCompanyList(pagination, keySearch);
  };

  const handleChange = (value, record) => {
    const data = {
      pagination,
      _id: record,
      expiryDate: parseInt(value),
    };
    extendCompany(data);
    console.log(`${record}  selected ${value}`);
  }

  const onDeleteOrgan = (record) =>{
      const data = {
        pagination: {current: 1, pageSize: 2, total: 0},
        companyId: record.key,
      };
      deleteCompany(data);
  }

  const onActiveOrgan = (record) =>{
    const data = {
      pagination,
      _id: record.key,
    };
    activeCompany(data);
    console.log(record.key);
  }



  const start = () => {
    setLoading(true);

    console.log('selectedRowKeys: ', selectedRowKeys);
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000);
  };

  const onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys([...selectedRowKeys]);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => start()} disabled={!hasSelected} loading={loading}>
          Reload
          </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
        rowSelection={rowSelection} 
        columns={columns} 
        dataSource={companyList} />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { companyList} = state.companyReducer;
  return {
    companyList: companyList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyList: (params) => dispatch(getCompanyListAction(params)),
    setPage: (params) => dispatch(setPageCompanyTable(params)),
    activeCompany: (params) => dispatch(activeCompanyAction(params)),
    deleteCompany: (params) => dispatch(deleteCompanyAction(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestTable);
