import React, {useEffect, useState} from 'react';
import useDebounce from "../../hooks/useDebounce";

const Search = ({onSearch}) => {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        if (debouncedQuery?.length > 1) {
            onSearch(debouncedQuery)
        } else {
            onSearch('')
        }
    }, [debouncedQuery, onSearch])

    return <div className="form-group">
        <label className="float-start">Search:</label>
        <input className="form-control" type="text" onChange={(e) => setQuery(e.target.value)}/>
    </div>
}

export default Search;


