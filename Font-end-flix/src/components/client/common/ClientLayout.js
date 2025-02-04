import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


const ClientLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default ClientLayout;
