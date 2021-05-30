import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
import { connect } from 'react-redux';
import {
    setPageTableAction, 
    createTaskAction,
    updateTaskAction,
    searchTaskAction,
} from '../../../../redux/actions';

import { PlusOutlined } from '@ant-design/icons';
import TestTable from './Table';
import './index.css'
function Task(props) {
    const {
    createTask,
    searchTaskList,
    isShow,
    updateTask,
    pagination,
    setPage,
      } = props;
      const [form] = Form.useForm();
      const [state, setState] = useState({ visible: false });
      const [editTask, setEditTask] = useState({});
      const [keySearch, setKeySearch] = useState('');
      const [isShowEdit, setIsShowEdit] = useState(false);

      useEffect(() => {
        form.resetFields();
      }, [editTask._id])
      
      useEffect( () => {
        return  () => {
          setPage({current: 1, pageSize: 2, total: 0})
        }
      }, [])

      const showDrawer = () => {
        setState({
          visible: true,
        });
      };
    
      const showEdit = (val) => {
        setIsShowEdit(true);
        showDrawer()
        setEditTask(val);
      }
    
      const onClose = () => {
        setState({
          visible: false,
        });
        setIsShowEdit(false);
        setEditTask({});
        form.resetFields();
      };
    
      const addTodo = (values) => {
        if(isShowEdit){
          const par = {
            pagination,
            _id: editTask._id,
            taskInfo: values,
          }
          updateTask(par)
        }else{
          createTask(values);
        }
        onClose();
      }
    
      const searchOrganizationList = (val) =>{
        setKeySearch(val)
        searchTaskList({current: 1, pageSize: 2, total: 0, keySearch: val})
      }
    
      const renderHeader = () => {
        return (
          <>
            <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
              <Button type="primary" onClick={showDrawer}>
                <PlusOutlined /> New Task
                </Button>
              <Input
                style={{ height: 35, width: "20%" }}
                onChange={(e) => searchOrganizationList(e.target.value)}
              />
            </div>
            <Drawer
              title={isShowEdit ? "Edit Task" : "Create a new Task"}
              width={720}
              onClose={onClose}
              visible={state.visible}
              bodyStyle={{ paddingBottom: 80 }}
              footer={
                <div
                  style={{
                    textAlign: 'right',
                  }}
                >
                  <Button onClick={onClose} style={{ marginRight: 8 }}>
                    Cancel
                  </Button>
                  <Button onClick={() => form.submit()} type="primary">
                    Submit
                  </Button>
                </div>
              }
            >
              <Form
                form={form}
                initialValues={isShowEdit ? editTask : {}}
                layout="vertical"
                hideRequiredMark
                onFinish={(values) => addTodo(values)}>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="taskName"
                      label="Task Name"
                      rules={[{ required: true, message: 'Please enter task name' }]}
                    >
                      <Input placeholder="Please enter task name" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="video"
                      label="Video"
                      rules={[{ required: true, message: 'Please enter video' }]}
                    >
                      <Input placeholder="Please enter Video" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="note"
                      label="Note"
                      rules={[{ required: true, message: 'Please enter Note' }]}
                    >
                      <Input.TextArea  placeholder="Please enter Note" />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Drawer>
          </>
        )
      }
    
      return (
        <div style={{ padding: 10 }} className={isShow ? 'hidden' : 'show'}>
          <div className='heading' >DANH SÁCH BÀI HỌC</div>
          {renderHeader()}
          <TestTable
            showEdit={showEdit}
            updateTask={updateTask}
            pagination={pagination}
            keySearch={keySearch}
            setPage={setPage}
          />
        </div>
      );
    }
  
    const mapStateToProps = (state) => {
      const { pagination} = state.leaderReducer ;
      return {
        pagination: pagination,
      }
    };
    
    const mapDispatchToProps = (dispatch) => {
      return {
        setPage: (params) => dispatch(setPageTableAction(params)),
        createTask: (params) => dispatch(createTaskAction(params)),
        updateTask: (params) => dispatch(updateTaskAction(params)),
        searchTaskList: (params) => dispatch(searchTaskAction(params)),
      };
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Task);