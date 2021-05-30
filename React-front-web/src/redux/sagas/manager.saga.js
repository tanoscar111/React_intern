import {debounce, put, takeEvery} from 'redux-saga/effects';
import Cookie from '../../utils/cookie.js'
import axios from 'axios';
import {
    GET_LEADER_LIST_SUCCESS,
    GET_LEADER_LIST_FAIL,
    GET_LEADER_LIST,
    SET_LEADER,
    SET_LEADER_FAIL,
    ACTIVE_LEADER,
    UPDATE_LEADER,
    DELETE_LEADER,
    SEARCH_LEADER_LIST,
  } from '../constants'
import history from '../../utils/history'
import {ROUTERS} from '../../constants/router'

function* getLeaderListSaga(action){
    console.log("🚀 ~ file: school.saga.js ~ line 37 ~ function*getSchoolListSaga", action.payload)
    const { keySearch, current, pageSize, } = action.payload;
    const cooke = new Cookie();
    const userName = cooke.get("userInfo");
    const company = userName.personId.companyId;
    const apiUrl = 'http://localhost:5000/post/findLeaderList';
    const cookie = new Cookie();
    const token = cookie.get('token');
    const config = {
        headers:{
            authorization: token,
        },
        params: {
            ...pageSize && {pageSize},    
            ...current && {current},
            ...keySearch && {keySearch},
            ...company && {company},
        },
            
    }
    try {
        const res = yield axios.get(apiUrl,config);
        // const list = yield createListOrgan(res.data.list);
        const newDatabase = {
            newList: res.data,
            count: res.data.length,
            pagination: {current, pageSize},
        }
        console.log("🚀 ~ file: school.saga.js ~ line 52 ~ function*getSchoolListSaga ~ list", newDatabase)
        yield put({
            type: GET_LEADER_LIST_SUCCESS,
            payload: newDatabase,
        })
    } catch (error) {
        yield put({
            type: GET_LEADER_LIST_FAIL,
            payload: error,
        });
    }
}

function* createLeaderSaga(action){
    console.log("🚀 ~ file: school.saga.js ~ line 74 ~ function*createSchoolSaga ~ action", action)
    const apiUrl = 'http://localhost:5000/post/createLeader';
    const cookie = new Cookie();
    const token = cookie.get('token');
    const config = {
        headers:{
            Authorization: token,   
        },
    }
    try {
        const res = yield axios.post(apiUrl,action.payload,config);
        console.log("🚀 ~ file: school.saga.js ~ line 84 ~ function*createSchoolSaga ~ res", res)
        yield put({
            type: GET_LEADER_LIST,
            payload: {current: 1, pageSize: 2, total: 0},
        })
    } catch (error) {
        yield put({
            type: SET_LEADER_FAIL,
            payload: error, 
        });
    }
}

function* activeLeaderSaga(action){
    console.log("🚀 ~ file: organization.saga.js ~ line 171 ~ function*activeOrganSaga ~ action", action.payload)
    const apiUrl = 'http://localhost:5000/post/activeLeader';
    const pagination = action.payload.pagination
    const cookie = new Cookie();
    const token = cookie.get('token');
    const config = {
        headers:{
            Authorization: token,   
        },
    }
    const params= {
        _id:action.payload._id,
    }
    
    try {
        const res = yield axios.put(apiUrl,params,config);
        yield put({
            type: GET_LEADER_LIST,
            payload: pagination,
        });
    } catch (error) {
        yield put({
            type: SET_LEADER_FAIL,
            payload: error,
        });
    }
}

function* updateSchoolSaga(action){
    const {expiryDate,organInfo, _id } = action.payload
    const pagination = action.payload.pagination
    console.log("🚀 ~ file: organization.saga.js ~ line 139 ~ function*updateOrganSaga ~ action.payload", action.payload)
    const apiUrl = 'http://localhost:5000/post/updateOrg';
    const cookie = new Cookie();
    const token = cookie.get('token');
    const config = {
        headers:{
            Authorization: token,   
        },
    }
    const params= {
        ..._id && {_id},    
        ...expiryDate && {expiryDate},
        ...organInfo && {organInfo}
    }
    
    try {
        const res = yield axios.put(apiUrl,params,config);
        yield put({
            type: GET_LEADER_LIST,
            payload: pagination,
        });
    } catch (error) {
        yield put({
            type: SET_LEADER_FAIL,
            payload: error,
        });
    }
}

function* deleteSchoolSaga(action){
    const apiUrl = 'http://localhost:5000/post/delete';
    const cookie = new Cookie();
    const token = cookie.get('token');
    const config = {
        headers:{
            Authorization: token,       
        },
    };
    const companyId= action.payload.companyId;
    try {
        const res = yield axios.delete(`${apiUrl}/${companyId}`,config);
        const pagination = action.payload.pagination;
        console.log("🚀 ~ file: organization.saga.js ~ line 169 ~ function*deleteOrganSaga ~ pagination", pagination)
        yield put({
            type: GET_LEADER_LIST,
            payload: pagination,
        });
    } catch (error) {
        yield put({
            type: SET_LEADER_FAIL,
            payload: error,
        });
    }
}

export default function* leaderInfSaga() {
    yield takeEvery(GET_LEADER_LIST, getLeaderListSaga); 
    // yield debounce(300,SEARCH_LEADER_LIST, getSchoolListSaga);
    yield takeEvery(SET_LEADER, createLeaderSaga);
    yield takeEvery(ACTIVE_LEADER, activeLeaderSaga);
    // yield takeEvery(UPDATE_LEADER, updateSchoolSaga);
    // yield takeEvery(DELETE_LEADER, deleteSchoolSaga);
}