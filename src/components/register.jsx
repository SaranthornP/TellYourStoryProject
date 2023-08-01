import "../App.css"
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "../firebase"
import { getAuth } from 'firebase/auth'
import React from 'react';

let form = null;
let formarea = null;

class Register extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        form = document.getElementById("RegisterForm")
        formarea = document.getElementById("form-area")
        const email = form.email.value
        const password = form.password.value
        console.log(email + " " + password)
    }
    render() {
        return (
            <div className="container mb-5" >
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                    <div className="col-md-8 col-lg-6 border bg-white shadow p-5">
                        <h5>ยินดีต้องรับสู่ Tell Your Story</h5>
                        <h2>สมัคร</h2><br />
                        <div className="form-area">
                            <form id="RegisterForm" onSubmit={this.handleSubmit}>
                                <div className=" mb-4 form-group">
                                    <input type="email" name="email" id="floatingEmail" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <label className="form-label" htmlFor="floatingEmail">Email address</label>
                                </div>
                                <div className=" mb-3 form-group">
                                    <input type="password" name="password" id="floatingPass" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2 form-group">
                                    <button type="submit" className="btn btn-primary btn-lg px-auto">Register</button>
                                </div>
                            </form>
                        </div>

                        <form id="">
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">สมัครด้วย</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="bi bi-facebook"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="bi bi-google"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="bi bi-apple"></i>
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>


                            {/*<select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>*/}

                            {/**Email input */}
                            <div className="form-floating mb-4 form-group">
                                <input type="email" id="floatingEmail" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                                <label className="form-label" htmlFor="floatingEmail">Email address</label>
                            </div>

                            {/**Password input */}
                            <div className="form-floating mb-3 form-group">
                                <input type="password" id="floatingPass" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" htmlFor="floatingPass">รหัสผ่าน</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/**Check box */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        จดจำฉันไว้
                                    </label>
                                </div>
                                <a href="#!" className="text-body">ลืมรหัสผ่าน</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2 form-group">
                                <button type="submit" className="btn btn-primary btn-lg px-auto">Register</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">ยังไม่มีบัญชีหรอ?
                                    <a href="#!" className="ps-1 link-danger">สมัครเลย!</a>
                                </p>
                            </div>

                        </form>
                    </div>
                </div>

            </div >

        );
    }
}
export default Register;