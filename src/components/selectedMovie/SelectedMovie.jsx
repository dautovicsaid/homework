import React, {useEffect, useState} from 'react';
import MovieCard from "../movieCard/MovieCard";
import TableWrapper from "../table/Table";
import { Col, Row} from 'antd';
import Search from "../search/Search";
import {moviesList, usersList} from "../../constants/constants";
import {useNavigate, useParams} from "react-router-dom";

const SelectedMovie = () => {
    const [usersWatched, setUsersWatched] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [data, setData] = useState(null);
    let {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const movie = moviesList.find(movie => movie.id === parseInt(id, 10));
        const users = usersList.filter(user => user.movies.includes(movie.id))
        setData(movie)
        setUsersWatched(users)
    }, [id]);

    const userTableHeaders = [
        {
            title: 'Image',
            dataIndex: 'image',
            render: (text, record) => {
                return <img src={record.image}
                            style={{width: '50px', aspectRatio: 1, borderRadius: '50%'}}
                            alt={record.image}/>
            }
        }, {
            title: 'First Name',
            dataIndex: 'firstName'
        }, {
            title: 'Surname',
            dataIndex: 'lastName'
        }, {
            title: 'Age',
            dataIndex: 'age'
        }, {
            title: 'City',
            dataIndex: 'city'
        }];

    const searchUsers = (searchTerm) => {
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        setFilteredUsers(usersWatched.filter(user =>
            user.firstName.toLowerCase().includes(lowercaseSearchTerm)
            || user.lastName.toLowerCase().includes(lowercaseSearchTerm)));
    }

    return <>
        <Row>
            <Col span={4} offset={2}>
                {data && <MovieCard
                    name={data.name}
                    year={data.year}
                    genre={data.genre}
                    image={data.image}
                    actors={data.actors}/>
                }
            </Col>
            <Col span={16}>
                <Search onSearch={searchUsers}/>
                <TableWrapper headers={userTableHeaders}
                              rows={filteredUsers}
                              onRowClick={(row) => {
                                  navigate(`/users/${row.key}`)
                              }}
                />
            </Col>
        </Row>
    </>;
}

export default SelectedMovie;

