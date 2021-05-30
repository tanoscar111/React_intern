import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Button, Tooltip, Space,Select,Modal  } from 'antd';
import ReactPlayer from 'react-player'
import {
  getQuestionListAction, 
  setPageCompanyTable, 

  deleteQuestionAction,
} from '../../../../redux/actions'
import Moment from 'react-moment';
import moment from 'moment'


function TestTable(props) {
  const { Option } = Select;
  const {
    questionList, 
    pagination,
    getQuestionList, 
    deleteQuestion, 
    showEdit,
    keySearch,
    } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getQuestionList({current: 1, pageSize: 5, total: 0, keySearch});
  }, []);

  useEffect(() => {
    getQuestionList({current: 1, pageSize: 5, total: 0, keySearch});
}, [keySearch])

  const columns = [
    {
      title: 'Nội Dung',
      width: 300,
      ellipsis: {
        showTitle: false,
      },
      render: (record) =>(
        <Tooltip placement="topLeft" color={'yellow'} title={record.content}>
          {record.content}
      </Tooltip>
      ),
    },
    {
      title: 'Đáp án A',
      width: 120,
      ellipsis: {
        showTitle: false,
      },
      render: (record) =>(
        <Tooltip placement="topLeft" color={'yellow'} title={record.answer_A}>
          {record.answer_A}
      </Tooltip>
      ),
    },
    {
      title: 'Đáp án B',
      width: 120,
      ellipsis: {
        showTitle: false,
      },
      render: (record) =>(
        <Tooltip placement="topLeft" color={'yellow'} title={record.answer_B}>
          {record.answer_B}
      </Tooltip>
      ),
    },
    {
      title: 'Đáp án C',
      width: 120,
      ellipsis: {
        showTitle: false,
      },
      render: (record) =>(
        <Tooltip placement="topLeft" color={'yellow'} title={record.answer_C}>
          {record.answer_C}
      </Tooltip>
      ),
    },
    {
      title: 'Đáp án D',
      width: 120,
      ellipsis: {
        showTitle: false,
      },
      render: (record) =>(
        <Tooltip placement="topLeft" color={'yellow'} title={record.answer_D}>
          {record.answer_D}
      </Tooltip>
      ),
    },
    {
      title: 'Đáp án đúng',
      dataIndex: 'result',
      width: 120
    },
    {
      title: 'Hành động',
      align: 'center',
      render: (record) =>(
        <Space size="middle">
          <Button onClick={()=>showEdit(record)} type="primary">Edit</Button>
          <Button onClick={()=>onDeleteQuestion(record)} type="danger">Delete</Button>
        </Space>
      ),
    },
  ];

  const handleTableChange = (pagination) => {
    getQuestionList(pagination, keySearch);
  };


  const onDeleteQuestion = (record) =>{
    const data = {
      pagination: {current: 1, pageSize: 5, total: 0},
      questionId: record._id,
    };
    deleteQuestion(data);
  }

  return (
    <div>
      <Table
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
        columns={columns} 
        dataSource={questionList} />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { questionList} = state.leaderReducer;
  return {
    questionList: questionList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestionList: (params) => dispatch(getQuestionListAction(params)),
    setPage: (params) => dispatch(setPageCompanyTable(params)),
    deleteQuestion: (params) => dispatch(deleteQuestionAction(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestTable);
