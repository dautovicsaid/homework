import React from 'react';
import {Row, Col, Space, Card} from "antd";
import {useNavigate} from "react-router-dom";


const MovieCard = ({id = null, name, year, genre, actors, image}) => {

    const navigate = useNavigate();

    return (
        <Col span={5} offset={1}>
            <Card
                style={{width: "270px"}}
                hoverable
                cover={<img alt={name} src={image}
                />}
                onClick={() => id != null ? navigate(`${id}`) : ""}
            >
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
            </Card>
        </Col>
    )
}

export default MovieCard;