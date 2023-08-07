import { Link } from "react-router-dom";
import "../App.css"
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Register() {
    function handleSubmit(e) {
        e.preventDefault();
        const form = document.getElementById("RegisterForm")
        const formarea = document.getElementById("form-area")
        const email = form.email.value
        const password = form.password.value
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("สร้างบัญชีสำเร็จ")
            }).catch((error) => {
                if (error.message == "Firebase: Error (auth/email-already-in-use).")
                    alert("มีบัญชีที่ใช้ Email นี้ไปแล้ว")
                else if (error.message == "Firebase: Error (auth/invalid-email).")
                    alert("โปรดใส่ Email ที่ถูกต้อง")
                else if (error.message == "Firebase: Error (auth/missing-password).")
                    alert("โปรดใส่รหัสผ่าน")
                else
                    alert(error.message)
            })
    }
    return (
        <div className="container mb-5" >
            <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col-md-8 col-lg-6 border bg-white shadow p-5">
                    <h5>ยินดีต้องรับสู่ Tell Your Story</h5>
                    <h2>สมัคร</h2><br />
                    <div className="form-area">
                        <form id="RegisterForm" onSubmit={handleSubmit}>
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
                            <div className="row">
                                <div className="form-floating mb-4 form-group col-12 col-lg-6">
                                    <input type="text" name="firstname" id="floatingFS" className="form-control form-control-lg" placeholder="Enter Firstname" />
                                    <label className="form-label ms-3" htmlFor="floatingFS">Firstname</label>
                                </div>
                                <div className="form-floating mb-4 form-group col-12 col-lg-6">
                                    <input type="text" name="lastname" id="floatingLS" className="form-control form-control-lg" placeholder="Enter Lastname" />
                                    <label className="form-label ms-3" htmlFor="floatingLS">Lastname</label>
                                </div>
                            </div>

                            <div className="form-floating mb-4 form-group">
                                <input type="email" name="email" id="floatingEmail" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                                <label className="form-label" htmlFor="floatingEmail">Email address</label>
                            </div>

                            {/**Password input */}
                            <div className="form-floating mb-3 form-group">
                                <input type="password" name="password" id="floatingPass" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" htmlFor="floatingPass">รหัสผ่าน</label>
                            </div>


                            <div className="text-center text-lg-start mt-4 pt-2 form-group">
                                <button type="submit" className="btn btn-primary btn-lg px-auto">Register</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">ยังไม่มีบัญชีหรอ?
                                    <Link to="/Signin" className="ps-1 link-danger">สมัครเลย!</Link>
                                </p>
                            </div>



                        </form>

                    </div>


                </div>
            </div>

        </div >

    )
}