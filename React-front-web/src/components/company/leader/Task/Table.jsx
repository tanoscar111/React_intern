import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Button, Tooltip, Space,Select,Modal  } from 'antd';
import ReactPlayer from 'react-player'
import {
  getTaskListAction, 
  setPageTableAction, 
  activeCompanyAction,
  deleteTaskAction,
} from '../../../../redux/actions'
import Moment from 'react-moment';
import moment from 'moment'


function TestTable(props) {
  const { Option } = Select;
  const {
    taskList, 
    pagination,
    getTaskList, 
    setPage, 
    deleteTask, 
    showEdit,
    keySearch,
    } = props;
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [linkUrl, setLinkUrl] = useState("");
  const [isVideoPlayer, setIsVideoPlayer] = useState(true);
  const [isNote, setIsNote] = useState("")
  
  useEffect( async ()  => {
    getTaskList({current: 1, pageSize: 2, total: 0, keySearch});
  }, []);

  useEffect( () =>  {
    setPlaying(true);
  }, [visible])
  
  const onHiddenVideo = async () =>{
    await setPlaying(false);
    setVisible(false)
    setLinkUrl("");
    setIsNote("")
    setIsVideoPlayer(true);
  }
  const columns = [
    {
      title: 'Task Name',
      width: 200,
      defaultSortOrder: 'descend',
      ellipsis: {
        showTitle: false,
      },
      render: (record) =>(
        <Tooltip placement="topLeft" color={'yellow'} title={record.taskName}>
          {record.taskName}
      </Tooltip>
      ),
    },
    {
      title: 'Video',
      align: 'center',
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (record) =>(
        <Space size="middle">
            <button style={{border: "none"}}>
              <img 
                src="https://www.pngkey.com/png/full/801-8010034_play-icons-button-youtube-subscribe-computer-play-video.png"
                alt="my image"
                style={{width: 80, height: 40}}
                onClick={()=>onClickVideo(record)} 
              />
            </button>
        </Space>
      ),
    },
    {
      title: 'Note',
      align: 'center',
      width: 150,
      render: (record) =>(
        <Space size="middle">
            <button style={{border: "none"}}>
              <img 
                src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                alt="myImage"
                style={{width: 80, height: 40}}
                onClick={()=>onClickImage(record)} 
              />
            </button>    
        </Space>
      ),
    },
    {
      title: 'Questions ',
      align: 'center',
      width:100,
      render: (record) =>(
        <Tooltip placement="topLeft" color={'yellow'} title={record.count}>
          {record.count}
      </Tooltip>
      ),
    },
    {
      title: 'Exam',
      align: 'center',
      width:100,
      render: (record) =>(
        <Tooltip placement="topLeft" color={'yellow'} title={record.exam}>
          {record.exam}
      </Tooltip>
      ),
    },
    {
      title: 'Action',
      align: 'center',
      render: (record) =>(
        <Space size="middle">
          <Button onClick={()=>showEdit(record)} type="primary">Edit</Button>
          <Button onClick={()=>onDeleteTask(record)} type="danger">Delete</Button>
        </Space>
      ),
    },
  ];

  const onClickImage = (val) =>{
    setVisible(true);
    setIsVideoPlayer(false)
    setIsNote(val.note)
    }

  const onClickVideo = (val) =>{
  setVisible(true);
  setLinkUrl(val.video);
  }

  const renderModal = () =>{
    return(
      <Modal
        title={isVideoPlayer? " Video" : "Note"}
        centered
        visible={visible}
        onOk={() => onHiddenVideo()}
        onCancel={() => onHiddenVideo()}
        width={1000}
      >
        {isVideoPlayer ?
          <ReactPlayer 
          url={linkUrl}
          width="950px"
          height="450px"
          controls={true}
          playing={playing}
          />
          : 
          <div
            dangerouslySetInnerHTML={{
                __html: isNote
            }}>
          </div>
        } 
      </Modal> 
    );
  }

  const handleTableChange = (pagination) => {
    setPage(pagination);
    getTaskList(pagination, keySearch);
  };


  const onDeleteTask = (record) =>{
    const data = {
      pagination: {current: 1, pageSize: 2, total: 0},
      taskId: record._id,
    };
    deleteTask(data);
  }

  return (
    <div>
      <Table
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
        columns={columns} 
        dataSource={taskList} />
        {renderModal()}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { taskList} = state.leaderReducer;
  return {
    taskList: taskList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (params) => dispatch(setPageTableAction(params)),
    getTaskList: (params) => dispatch(getTaskListAction(params)),
    deleteTask: (params) => dispatch(deleteTaskAction(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestTable);
