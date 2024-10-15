import React from 'react';
import Header from "./Header";
import SidebarAdmin from "./Sidebar";


const AdminLayout = ({ children }) => {
    return (
        <div className="content" >
            <Header />
            {children}
        </div>
    );
};

export default AdminLayout;
