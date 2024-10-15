import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (

        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-secondary navbar-dark">
                <NavLink className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary"><i className="fa fa-film me-2"></i>Flix</h3>
                </NavLink>

                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src="/img/tinh.jpg" alt=""
                             style={{width: "40px", height: "40px"}}/>
                        <div
                            className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">Tinh</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <NavLink to="chart.html" className="nav-item nav-link">
                        <i className="fa fa-chart-pie me-2"></i>Charts
                    </NavLink>
                    <NavLink to="/admin/movie" className="nav-item nav-link">
                        <i className="fa fa-film me-2"></i>Movie
                    </NavLink>
                    <NavLink to="form.html" className="nav-item nav-link">
                        <i className="fa fa-user me-2"></i>Account
                    </NavLink>
                    <NavLink to="table.html" className="nav-item nav-link">
                        <i className="fa fa-comment me-2"></i>Feedback
                    </NavLink>

                    <div className="nav-item dropdown">
                        <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i
                            className="far fa-file-alt me-2"></i>Pages</NavLink>
                        <div className="dropdown-menu bg-transparent border-0">
                            <NavLink to="/sing-in" className="dropdown-item">Sign In</NavLink>
                            <NavLink to="/sing-up" className="dropdown-item">Sign Up</NavLink>
                        </div>
                    </div>

                </div>
            </nav>
        </div>

    );
}

export default Sidebar;
