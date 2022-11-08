import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {usersList} from "../../constants/constants";
import Search from "../search/Search";
import TableWrapper from "../table/Table";

const UsersTable = () => {
    const navigate = useNavigate();
    const headers = [
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

    const [filteredUsers, setFilteredUsers] = useState(usersList);

    const searchUsers = (searchTerm) => {
        setFilteredUsers(usersList.filter(user =>
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    return <>
        <Search onSearch={searchUsers}/>
        <TableWrapper headers={headers}
                      rows={filteredUsers}
                      onRowClick={(row) => {
                          navigate(`users/${row.key}`)
                      }}
        />
    </>
}

export default UsersTable;