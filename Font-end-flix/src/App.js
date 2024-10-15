import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {Helmet} from "react-helmet";
import AdminLayout from "./components/admin/common/AdminLayout";
import SidebarAdmin from "./components/admin/common/Sidebar";
import ClientLayout from "./components/client/common/ClientLayout";
import SidebarClient from "./components/client/common/Sidebar";
import Slider from "./components/client/Slide";
import TrendingMovie from "./components/client/TrendingMovie";
import TvSeries from "./components/client/TvSeries";
import HotMovie from "./components/client/HotMovie";
import MovieDetail from "./components/client/MovieDetail";
import SingIn from "./components/admin/login/SingIn";
import SingUp from "./components/admin/login/SingUp";
import Movie from "./components/admin/Movie";
import React from "react";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Các route cho Admin */}
                    <Route path="/admin" element={
                        <>
                            <Helmet>
                                <link href="/css/bootstrap.min.css" rel="stylesheet"/>
                                <link href="/css/style.css" rel="stylesheet"/>
                            </Helmet>
                            <SidebarAdmin/>
                            <AdminLayout>

                            </AdminLayout>
                        </>
                    }/>
                    <Route path="/admin/movie" element={
                        <>
                            <Helmet>
                                <link href="/css/bootstrap.min.css" rel="stylesheet"/>
                                <link href="/css/style.css" rel="stylesheet"/>
                            </Helmet>
                            <SidebarAdmin/>
                            <AdminLayout>
                                <Movie/>
                            </AdminLayout>
                        </>
                    }/>

                    <Route path="/sing-in" element={
                        <>
                            <Helmet>
                                <link href="/css/bootstrap.min.css" rel="stylesheet"/>
                                <link href="/css/style.css" rel="stylesheet"/>
                            </Helmet>
                            <SingIn/>
                        </>
                    }/>

                    <Route path="/sing-up" element={
                        <>
                            <Helmet>
                                <link href="/css/bootstrap.min.css" rel="stylesheet"/>
                                <link href="/css/style.css" rel="stylesheet"/>
                            </Helmet>
                            <SingUp/>
                        </>
                    }/>

                    {/* Các route cho Client */}
                    <Route path="/" element={
                        <>
                            <Helmet>
                                <link rel="stylesheet" href="/assets/component.css"/>
                                <link rel="stylesheet" href="/assets/style.css"/>
                                <link rel="stylesheet" href="/assets/grid.css"/>
                            </Helmet>
                            <ClientLayout>
                                <SidebarClient/>
                                <Slider/>
                                <TrendingMovie/>
                                <TvSeries/>
                                <HotMovie/>
                            </ClientLayout>
                        </>
                    }/>

                    <Route path="/detail" element={
                        <>
                            <Helmet>
                                <link rel="stylesheet" href="/assets/component.css"/>
                                <link rel="stylesheet" href="/assets/style.css"/>
                                <link rel="stylesheet" href="/assets/grid.css"/>
                            </Helmet>
                            <ClientLayout>
                                <MovieDetail/>
                            </ClientLayout>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
