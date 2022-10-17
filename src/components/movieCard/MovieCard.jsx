import React from 'react';
import {Row, Col, Space} from "antd";
import classes from './MovieCard.module.scss';


const MovieCard = ({name, year, genre, actors, image}) => {
    return (
        <Col span={16} offset={4}>
            <div className={classes["card"]}>
                <img src={image} alt={image}/>
                <div className={classes["card-content"]}>
                    <Space direction="vertical" size="large" style={{display: 'flex', alignItems: 'center'}}>
                        <Row>
                            <Col>
                                <h2> {name}</h2>
                            </Col>
                        </Row>
                        <Row gutter={50}>
                            <Col>
                                <span>{year}</span>
                            </Col>
                            <Col>
                                <span>{genre}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    {actors.join(', ')}
                                </p>
                            </Col>
                        </Row>
                    </Space>
                </div>
            </div>
        </Col>
    )
}

export default MovieCard;