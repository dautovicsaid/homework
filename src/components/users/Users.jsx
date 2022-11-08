import React from 'react';
import {usersList} from "../../constants/constants";
import UserCard from "../userCard/UserCard";
import {Col, Row} from "antd";

const Users = () => {
    return <>

        <Row gutter={16}>
            {usersList.map(user => {
                return <UserCard
                    key={user.key}
                    id={user?.id}
                    firstName={user?.firstName}
                    lastName={user?.lastName}
                    age={user?.age}
                    city={user?.city}
                    image={user?.image}
                />
            })}
        </Row>

    </>
}

export default Users;