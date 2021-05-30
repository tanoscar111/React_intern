import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Button, Tooltip, Space,Select, Anchor  } from 'antd';
import {
  getLeaderListAction, 
  setPageLeaderAction, 
  activeLeaderAction,
  extendSchoolAction,
  deleteSchoolAction,

} from '../../../../../redux/actions'


function TestTable(props) {
  const { Option } = Select;
  const { Link } = Anchor;
  const {
    leaderList, 
    pagination,
    getLeaderList, 
    setPage, 
    activeLeader,
    extendSchool,
    deleteSchool, 
    showEdit,
    keySearch,
    } = props;
    const [loading, setLoading] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    // const [isClickItem,setIsClickItem] = useState(leaderList[0]._id)
    console.log("🚀 ~ file: Table.jsx ~ line 33 ~ TestTable ~ leaderList", leaderList[0])
  const columns = [
    {
      title: 'Full Name',
      width: 180,
      defaultSortOrder: 'descend',
      ellipsis: {
        showTitle: false,
      },
      render: (record) =>(
        <Tooltip placement="topLeft" color={'yellow'} title={record.fullName}>
        <a onClick={()=>handleClick(record) }>{record.fullName}</a>

      </Tooltip>
      ),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      width: 120,
      ellipsis: {
        showTitle: false,
      },
      render: phone => (
        <Tooltip placement="topLeft" title={phone}>
          {phone}
        </Tooltip>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 160,
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
      title: 'Action',
      align: 'center',
      render: (record) =>(
        <Space size="middle">
          <Button block onClick={()=>onActiveLeader(record)} type="primary">{record.userId.status ? "Active" : "Block"}</Button>
          <Button onClick={()=>showEdit(record)} type="primary">Edit</Button>
          <Button onClick={()=>onDeleteOrgan(record)} type="danger">Delete</Button>
        </Space>
      ),
    },
  ];

    useEffect(() => {
        getLeaderList({current: 1, pageSize: 2, total: 0});
      }, []);

  const handleTableChange = (pagination) => {
   setPage(pagination);
   getLeaderList(pagination);
  };

  // const handleChange = (value, record) => {
  //   const data = {
  //     pagination,
  //     _id: record,
  //     expiryDate: parseInt(value),
  //   };
  //   extendSchool(data);
  //   console.log(`${record}  selected ${value}`);
  // }

  const handleClick = (val) => {
  console.log(val);
};

  const onDeleteOrgan = (record) =>{
      const data = {
        pagination: {current: 1, pageSize: 2, total: 0},
        companyId: record.key,
      };
      deleteSchool(data);
  }

  const onActiveLeader = (record) =>{
    const data = {
      pagination,
      _id: record.userId._id,
    };
    activeLeader(data);
    console.log(record.userId._id);
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
    <div style={{ marginBottom: 16 }}>
      <Table
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
        rowSelection={rowSelection} 
        columns={columns} 
        dataSource={leaderList} />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { leaderList} = state.managerReducer;
  const { userInfo} = state.userReducer;
  return {
    leaderList: leaderList,
    userInfo: userInfo,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLeaderList: (params) => dispatch(getLeaderListAction(params)),
    setPage: (params) => dispatch(setPageLeaderAction(params)),  
    // extendSchool: (params) => dispatch(extendSchoolAction(params)),
    activeLeader: (params) => dispatch(activeLeaderAction(params)),
    // deleteSchool: (params) => dispatch(deleteSchoolAction(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestTable);
