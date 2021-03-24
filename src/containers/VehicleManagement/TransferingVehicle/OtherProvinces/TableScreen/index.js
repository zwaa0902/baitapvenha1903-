import { useState, useEffect, useContext } from 'react';
import { Context } from '@/contexts/Transfer';
import 'antd/dist/antd.css';
import { Table } from 'antd';

const TableScr = (props) => {
    const { dataSource, setDataSource, selectData, activeKeyTab } = useContext(
        Context,
    );
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const columns = [
        {
            title: 'Số hồ sơ',
            dataIndex: 'idOto',
        },
        {
            title: 'Chủ sở hữu',
            dataIndex: 'ten',
        },
        {
            title: 'Biển số',
            dataIndex: 'bienso_DAYDU',
        },
        {
            title: 'Số khung',
            dataIndex: 'so_KHUNG',
        },
        {
            title: 'Số máy 1',
            dataIndex: 'so_may',
        },
        {
            title: 'Trạng thái đăng ký',
            dataIndex: 'trang_thai_dang_ky',
        },
        {
            title: 'Trạng thái hồ sơ',
            dataIndex: 'trang_thai_ho_so',
        },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
            console.log('selectedRows changed: ', selectedRows);
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            setSelectedRowKeys(selectedRowKeys);
        },
        onSelect: (record, selected, selectedRows, nativeEvent) => {
            console.log('selectedRow: ', record);
            selectData.set([record]);
            activeKeyTab.set('tabChiTiet');
        },
    };

    return (
        <div style={{ backgroundColor: '#fafdff' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={dataSource.map((item, index) => {
                        item.key = index;
                        return item;
                    })}
                ></Table>
            </div>
        </div>
    );
};
export default TableScr;
