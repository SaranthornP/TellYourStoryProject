import "../App.css"
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Login() {

    return (
        <div className="container mb-5">
            <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col-md-9 col-lg-6 col-xl-5 border bg-white shadow p-5">
                    <img src="" className="border img-fluid" alt="Sample image"></img>
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 border bg-white shadow p-5">
                    <h5>ยินดีต้องรับสู่ Tell Your Story</h5>
                    <h2>เข้าสู่ระบบ</h2><br />
                    <form>
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p className="lead fw-normal mb-0 me-3">เข้าสู่ระบบด้วย</p>
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

                        {/**Email input */}
                        <div className="form-floating mb-4">
                            <input type="email" id="floatingEmail" className="form-control form-control-lg"
                                placeholder="Enter a valid email address" />
                            <label className="form-label" htmlFor="floatingEmail">Email address</label>
                        </div>

                        {/**Password input */}
                        <div className="form-floating mb-3">
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

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="button" className="btn btn-primary btn-lg px-auto">Login</button>
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