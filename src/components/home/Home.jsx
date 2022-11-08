import React from 'react';
import {Col, Row} from "antd";
import MoviesTable from "../moviesTable/MoviesTable";
import UsersTable from "../usersTable/UsersTable";

const Home = () => {

    return <>
        <Row>
            <Col span={9} offset={2}>
                <MoviesTable/>
            </Col>
            <Col span={9} offset={2}>
                <UsersTable/>
            </Col>
        </Row>
    </>
}

export default Home;