import React,{useState}from 'react';
import Header from '../../components/layout/Header';
import SchoolSidebar from '../../components/layout/Sidebar/School';
import Cookie from '../../utils/cookie';
import { Route, Redirect } from 'react-router-dom';


function SchoolLayout(props) {
    const {exact, path, component: Component, ...other} = props;
    const cooke = new Cookie();
    const userName = cooke.get("userInfo");
    const [isShow, setIsShow] = useState(false);
    console.log("🚀 ~ file: index.jsx ~ line 15 ~ SchoolLayout ~ userName", userName)
    if (userName && userName.username) {
        console.log("🚀 ~ file: index.jsx ~ line 15 ~ SchoolLayout ~ 1")
      if (userName.personId.roleId !== '6045cf1c83a38015cc63ccc4') {
        return <Redirect to="/login" />;
        console.log("🚀 ~ file: index.jsx ~ line 15 ~ SchoolLayout ~ 2")
      }
      <Redirect to="/school/information" />
      console.log("🚀 ~ file: index.jsx ~ line 15 ~ SchoolLayout ~ 3")
    } else {
        console.log("🚀 ~ file: index.jsx ~ line 15 ~ SchoolLayout ~ 4")
      return <Redirect to="/login" />;
    }
    const showSideBar = (val)=>{
        setIsShow(val);
    }
    
    return (
        <Route
            exact={exact}
            path={path}
            render={(routerProps)=>{
                return(
                    <div>
                        <Header/>
                        <div style={{display: 'flex'}}>
                            <SchoolSidebar
                                showSideBar = {showSideBar}
                            />
                            <Component 
                            {...other}{...routerProps}
                            isShow={isShow}
                            /> 
                        </div>
                    </div>
                )
            }}
        />
    );
}

export default SchoolLayout;