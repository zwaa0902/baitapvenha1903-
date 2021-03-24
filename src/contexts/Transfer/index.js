import React, { useContext, useState } from 'react';

export const Context = React.createContext({});

export const ContextProvider = ({ children }) => {
    const [dataSource, setDataSource] = useState([]);
    const [selectData, setSelectData] = useState([]);
    const [activeKeyTab, setActiveKeyTab] = useState('tabThongTin');
    return (
        <Context.Provider
            value={{
                dataSource: dataSource,
                setDataSource: setDataSource,
                selectData: { get: selectData, set: setSelectData },
                activeKeyTab: { get: activeKeyTab, set: setActiveKeyTab },
            }}
        >
            {children}
        </Context.Provider>
    );
};
