import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {moviesList, usersList} from "../../constants/constants";
import {Col, Row} from "antd";
import Search from "../search/Search";
import TableWrapper from "../table/Table";
import UserCard from "../userCard/UserCard";

const SelectedUser = () => {
    const [moviesWatched, setMoviesWatched] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [data, setData] = useState(null);
    let {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const user = usersList.find(user => user.id === parseInt(id, 10));
        const movies = moviesList.filter(movie => user.movies.includes(movie.id))
        setData(user)
        setMoviesWatched(movies)
    }, [id]);

    const movieTableHeaders = [
        {
            title: "Id",
            dataIndex: "id",
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: "Name",
            dataIndex: "name"
        },
        {
            title: "Year",
            dataIndex: "year",
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.year - b.year,
        },
        {
            title: "Genre",
            dataIndex: "genre",
            filters: [
                {
                    text: 'Crime',
                    value: 'Crime',
                },
                {
                    text: 'Drama',
                    value: 'Drama',
                },
                {
                    text: 'Action',
                    value: 'Action',
                },
                {
                    text: 'Biography',
                    value: 'Biography'
                },
                {
                    text: 'Horror',
                    value: 'Horror',
                },
                {
                    text: 'Mystery',
                    value: 'Mystery',
                }],
            onFilter: (value, record) => record.genre.indexOf(value) === 0
        },
    ];

    const searchMovies = (searchTerm) => {
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        setFilteredMovies(moviesWatched.filter(movie =>
            movie.name.toLowerCase().includes(lowercaseSearchTerm)
        ));
    }

    return <>
        <Row>
            <Col span={4} offset={2}>
                {data && <UserCard
                    firstName={data.firstName}
                    lastName={data.lastName}
                    age={data.age}
                    city={data.city}
                    image={data.image}/>
                }
            </Col>
            <Col span={16}>
                <Search onSearch={searchMovies}/>
                <TableWrapper headers={movieTableHeaders}
                              rows={filteredMovies}
                              onRowClick={(row) => {
                                  navigate(`/movies/${row.key}`)
                              }}
                />
            </Col>
        </Row>
    </>;
}

export default SelectedUser;