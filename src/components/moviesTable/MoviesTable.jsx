import React, {useState} from 'react';
import {moviesList} from "../../constants/constants";
import Table from "../table/Table";
import Search from "../search/Search";
import {useAppData} from "../../context/AppContext";

const MoviesTable = () => {
    const headers = [
        {
            title: "Id",
            property: "id"
        },
        {
            title: "Name",
            property: "name"
        },
        {
            title: "Year",
            property: "year"
        },
        {
            title: "Genre",
            property: "genre"
        },
    ];
    const {setSelectedMovie} = useAppData()
    const [filteredMovies, setFilteredMovies] = useState(moviesList);

    const searchMovies = (searchTerm) => {
        setFilteredMovies(moviesList.filter(movie =>
            movie.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    return <div className="col-6">
        <Search onSearch={searchMovies}/>
        <Table
            headers={headers}
            rows={filteredMovies}
            onRowClick={(e) => setSelectedMovie(e)}
        />
    </div>

}

export default MoviesTable;