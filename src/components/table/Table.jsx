import React from 'react';
import {Table} from 'antd';

const TableWrapper = ({
    headers,
    rows,
    onRowClick
}) => {
    return  <Table dataSource={rows} columns={headers} onRow={(record, rowIndex) => {
        return {
            onClick: event => {
                onRowClick(record)
            }
        }
    }
    }/>
}

export default TableWrapper;


