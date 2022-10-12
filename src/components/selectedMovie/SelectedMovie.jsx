import React, {useEffect, useState} from 'react';
import MovieCard from "../movieCard/MovieCard";
import Table from "../table/Table";
import Search from "../search/Search";

const SelectedMovie = ({movie}) => {
    const [filteredUsers, setFilteredUsers] = useState([]);

    const userTableHeaders = [
        {
            title: 'Image',
            property: 'image',
            isImage: true
        }, {
            title: 'First Name',
            property: 'firstName'
        }, {
            title: 'Surname',
            property: 'lastName'
        }, {
            title: 'Age',
            property: 'age'
        }, {
            title: 'City',
            property: 'city'
        }];

    useEffect(() => {
        setFilteredUsers(movie.usersWatched);
    }, [movie]);

    const searchUsers = (searchTerm) => {
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        setFilteredUsers(movie.usersWatched.filter(user =>
            user.firstName.toLowerCase().includes(lowercaseSearchTerm)
            || user.lastName.toLowerCase().includes(lowercaseSearchTerm)));
    }

    return <>
        <MovieCard name={movie.name}
                   year={movie.year}
                   genre={movie.genre}
                   image={movie.image}
                   actors={movie.actors}/>
        <Search onSearch={searchUsers}/>
        <Table headers={userTableHeaders}
               rows={filteredUsers}
        />
    </>;
}


export default SelectedMovie;

