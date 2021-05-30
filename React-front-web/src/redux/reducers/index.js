import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import companyReducer from './company.reducer';
import schoolReducer from './school.reducer';
import managerReducer from './manager.reducer';
import leaderReducer from './leader.reducer';
import internReducer from './interns.reducer'; 
export default combineReducers({
  userReducer: userReducer,
  companyReducer: companyReducer,
  schoolReducer: schoolReducer,
  managerReducer: managerReducer,
  leaderReducer: leaderReducer,
  internReducer: internReducer,
})