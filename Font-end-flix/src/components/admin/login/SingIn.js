import {Link} from "react-router-dom";

const SingIn = () => {
    return (
        <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <Link to={"/admin"}>
                                <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>DarkPan</h3>
                            </Link>
                            <h3>Sign In</h3>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <a href="">Forgot Password</a>
                        </div>
                        <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign In</button>
                        <p className="text-center mb-0">Don't have an Account? <Link to={"/sing-up"}>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SingIn;
