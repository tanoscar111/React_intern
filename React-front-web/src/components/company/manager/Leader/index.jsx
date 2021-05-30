import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import LeaderList from './leaderList';
// import {
//     getLeaderListAction, 
//   } from '../../../../redux/actions'

function index(props) {
    const {isShow, leaderList, getLeaderList} = props;

    // useEffect(() => {
    //     getLeaderList({current: 1, pageSize: 2, total: 0});
    //   }, []);

    return (
        <Row style={{ padding: 10 }} className={isShow ? 'hidden' : 'show'}>
            <Col span={16}>
                <LeaderList
                // leaderList={leaderList}
                />
            </Col>
            <Col span={8}>col-12</Col>
        </Row>
    );
}

// const mapStateToProps = (state) => {
//     const { leaderList} = state.managerReducer;
//     return {
//       leaderList: leaderList,
//     }
//   };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       getLeaderList: (params) => dispatch(getLeaderListAction(params)),
//     };
//   }
  
//   export default connect(mapStateToProps, mapDispatchToProps)(index);

export default index;