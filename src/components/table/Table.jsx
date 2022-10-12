import React from 'react';

const Table = ({
    headers,
    rows,
    onRowClick
}) => {
    return <table className="table table-hover align-middle">
        <thead>
        <tr>
            {headers && headers.map((header, index) => {
                return <th key={index}>{header?.title}</th>
            })}
        </tr>
        </thead>
        <tbody>
        {rows &&
        rows.map(row => {
            return <tr onClick={() => onRowClick(row)} key={row?.id}>
                {headers && headers.map((header, index) => {
                        return <td key={index}>
                            {header.isImage === true ? <img src={row[header.property]}
                                                            style={{width: '50px', aspectRatio : 1, borderRadius: '50%'}}
                                                            alt='Missing alt'/> : row[header.property]}
                        </td>
                    }
                )}
            </tr>
        })}
        </tbody>
    </table>
}

export default Table;


