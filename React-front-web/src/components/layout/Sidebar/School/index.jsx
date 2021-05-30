import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { FaAddressCard, FaBuilding, FaRegChartBar, FaSchool } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { ROUTERS } from '../../../../constants/router';
import history from '../../../../utils/history';
import "./styles.css";

function SchoolSidebar(props) {
    const { Sider } = Layout;
    const {showSideBar} = props;
    let [collapsed, setCollapsed] = useState(false);

    const handleClick =(e) => {
        const path = `${e.key}`;
        history.push(path);
        
    };

    const onCollapse = collapsed => {
        setCollapsed(collapsed => !collapsed);
        showSideBar(collapsed)
    };
    return (
        <Sider theme={'light'} collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo"  />
          <Menu 
            onClick={handleClick}
            onDeselect={handleClick}
            defaultSelectedKeys={['1']}
            mode="inline">
                    
                    <Menu.Item key={ROUTERS.INFORMATION_PERSON_SCHOOL} icon={<FaAddressCard />}>
                            Thông tin cá nhân
                    </Menu.Item>
                    <Menu.Item key={ROUTERS.INFORMATION_SCHOOL} icon={<FaRegChartBar />}>
                            Thông Tin Nhà Trường
                    </Menu.Item>
                    <Menu.Item key={ROUTERS.INFORMATION_FACULTY_OF_SCHOOL} icon={<FcManager />}>
                            Quản lý Khoa
                    </Menu.Item>
                    <Menu.Item key={ROUTERS.INTERNS_SCHOOL} icon={<FaSchool />}>
                            Quản lý Thực tập sinh
                    </Menu.Item>
                    
          </Menu>
        </Sider>

    );
}

export default SchoolSidebar;