import React from 'react';
import {Menu} from "antd";
import { HomeOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {Link, Outlet} from "react-router-dom";

const Navbar = () => {

    return <>
        <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="contacts" icon={<UserOutlined />}>
                <Link to="/users">Users</Link>
            </Menu.Item>
            <Menu.Item key="movies" icon={<VideoCameraOutlined />}>
                <Link to="/movies">Movies</Link>
            </Menu.Item>
        </Menu>
        <div style={{marginTop:"50px"}}>
            <Outlet />
        </div>
    </>
}

export default Navbar;

