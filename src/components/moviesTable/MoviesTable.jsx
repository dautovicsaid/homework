import React, {useState} from 'react';
import {moviesList} from "../../constants/constants";
import SearchField from "../search/Search";
import {Col, Space} from "antd";
import TableWrapper from "../table/Table";
import {useNavigate} from "react-router-dom";

const MoviesTable = () => {
    const navigate = useNavigate();
    const headers = [
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
    const [filteredMovies, setFilteredMovies] = useState(moviesList);

    const searchMovies = (searchTerm) => {
        setFilteredMovies(moviesList.filter(movie =>
            movie.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    return <Col span={24}>
        <Space direction="vertical" size="large" style={{display: 'flex'}}>
            <SearchField onSearch={searchMovies}/>
            <TableWrapper
                headers={headers}
                rows={filteredMovies}
                onRowClick={(row) => {navigate(`movies/${row.key}`)}}
            />
        </Space>
    </Col>

}

export default MoviesTable;