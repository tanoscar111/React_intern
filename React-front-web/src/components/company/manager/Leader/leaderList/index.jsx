import React, { useState, useEffect } from 'react';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.css'
import { connect } from 'react-redux';
import {
  createLeaderAction,
}from '../../../../../redux/actions'
import TestTable from './Table';
import Cookie from '../../../../../utils/cookie.js';
function LeaderList(props) {
  const {
    isShow,
    createLeader,
    pagination,
    // leaderList,
  } = props;
  const [form] = Form.useForm();
  const [state, setState] = useState({ visible: false });
  const [editSchool, setEditOrgan] = useState({});
  // const [keySearch, setKeySearch] = useState('');
  const [isShowEdit, setIsShowEdit] = useState(false);
  const cooke = new Cookie();
  const userName = cooke.get("userInfo");
  console.log("🚀 ~ file: index.jsx ~ line 45 ~ addTodo ~ userName", userName)


  useEffect(() => {
    form.resetFields();
  }, [editSchool.key])

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
    setIsShowEdit(false);
    setEditOrgan({});
    form.resetFields();
  };

  const addTodo = (values) => {
    
    values.companyId = userName.personId.companyId;
    values.roleId = "6045cf1c83a38015cc63ccc3";
    createLeader(values);
    // if(isShowEdit){
    //   const par = {
    //     pagination,
    //     _id: editSchool.key,
    //     organInfo: values,
    //   }
    //   updateSchool(par)
    //   console.log("🚀 ~ file: index.jsx ~ line 50 ~ addTodo ~ dang o edit",par)
    
    // }else{
    //   createSchool(values);
    //   console.log("🚀 ~ file: index.jsx ~ line 50 ~ addTodo ~ dang o new", )
    // }
    onClose();
  }


  const renderHeader = () => {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
          <Button type="primary" onClick={showDrawer}>
            <PlusOutlined /> New Leader
            </Button>
          {/* <Input
            style={{ height: 35, width: "20%" }}
            onChange={(e) => searchOrganizationList(e.target.value)}
          /> */}
        </div>
        <Drawer
          title={isShowEdit ? "Edit Leader" : "Create a new Leader"}
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
            initialValues={isShowEdit ? editSchool : {}}
            layout="vertical"
            hideRequiredMark
            onFinish={(values) => addTodo(values)}>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="fullName"
                  label="Full Name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input placeholder="Please enter your name" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[{ required: true, message: 'Please enter your address' }]}
                >
                  <Input placeholder="Please enter your address" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  label="Phone"
                  rules={[{ required: true, message: 'Please enter your phone number' }]}
                >
                  <Input placeholder="Please enter your phone number" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: 'please enter your Email',
                      },
                    ]}
                  >
                    <Input placeholder="please enter your Email" />
                  </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    )
  }

  return (
    <div style={{ padding: 10 }}>
      {/* <div style={{ padding: 10 }} className={isShow ? 'hidden' : 'show'}> */}
      <div className='heading' > LEADER LIST</div>
      {renderHeader()}
      <TestTable
        // showEdit={showEdit}
        // updateSchool={updateSchool}
        pagination={pagination}
        // leaderList={leaderList}
        // keySearch={keySearch}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { pagination } = state.managerReducer;
  return {
    pagination: pagination,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLeader: (params) => dispatch(createLeaderAction(params)),
    // setLogoSchool: (params) => dispatch(setLogoSchoolAction(params)),
    // getSchoolList: (params) => dispatch(getSchoolListAction(params)),
    // updateSchool: (params) => dispatch(updateSchoolAction(params)),
    // searchSchoolList: (params) => dispatch(searchSchoolListAction(params)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(LeaderList);
