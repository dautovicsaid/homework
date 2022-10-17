import React, {useEffect, useState} from 'react';
import useDebounce from "../../hooks/useDebounce";
import {Input} from 'antd';
import './Search.scss';

const {Search} = Input;


const SearchField = ({onSearch}) => {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        if (debouncedQuery?.length > 1) {
            onSearch(debouncedQuery)
        } else {
            onSearch('')
        }
    }, [debouncedQuery, onSearch])

    return <Search placeholder="input search text"
                   onChange={(e) => setQuery(e.target.value)} allowClear/>

}

export default SearchField;


