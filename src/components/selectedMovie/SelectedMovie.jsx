import React, {useEffect, useState} from 'react';
import MovieCard from "../movieCard/MovieCard";
import TableWrapper from "../table/Table";
import Modal from "antd/es/modal/Modal";
import {useAppData} from "../../context/AppContext";
import {Button} from 'antd';
import Search from "../search/Search";

const SelectedMovie = ({movie}) => {
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [showUserTable, setShowUserTable] = useState(false);
    const {setIsModalOpen, isModalOpen} = useAppData()

    const handleCancel = () => {
        setIsModalOpen();
        setShowUserTable(false)
    };

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
        <Modal title="Basic Modal"
               open={isModalOpen}
               onCancel={handleCancel}
               footer={
                   <Button type="primary"
                           onClick={() => setShowUserTable(!showUserTable)}>Prikaži korisnike</Button>
               }
               width={'50vw'}>
            <MovieCard name={movie.name}
                       year={movie.year}
                       genre={movie.genre}
                       image={movie.image}
                       actors={movie.actors}/>
            {showUserTable &&
            <>
                <Search onSearch={searchUsers}/>
                <TableWrapper headers={userTableHeaders}
                              rows={filteredUsers}
                />
            </>
            }
        </Modal>
    </>;
}


export default SelectedMovie;

