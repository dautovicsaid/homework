import React from "react";
import classes from "./UserCard.module.scss";
import {useNavigate} from "react-router-dom";
import {Col} from "antd";

const UserCard = ({id, firstName, lastName, age, city, image}) => {
    const navigate = useNavigate();

    return <Col span={5} offset={1}>
        <div className={classes["user-card"]} onClick={() => id != null ? navigate(`${id}`) : ""}>
            <div className={classes["image-container"]}>
                <img src={image} alt="Profile photo"/>
            </div>
            <div className={classes["user-data"]}>
                <div>{firstName}</div>
                <div>{lastName}</div>
                <div>{age}</div>
                <div>{city}</div>
            </div>
        </div>
    </Col>
}

export default UserCard;