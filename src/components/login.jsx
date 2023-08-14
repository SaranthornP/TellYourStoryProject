import "../App.css"
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useEffect, useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../firebase"
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

export default function Login() {
    const navigate = useNavigate();
    const [persistenceValue, setPersistenceValue] = useState(false)
    const handleChange = (event) => {
        setPersistenceValue(event.target.checked);
    }
    async function getData(db) {
        const u = auth.currentUser;
        const userFind = doc(db, "User", u.email)
        const userSnap = await getDoc(userFind)
        if (userSnap.exists()) {
            console.log(userSnap.data())
            return navigate("/")
        }
        console.log("Fail!")
        navigate("/Signup/CreateProfile")
    }
    function handleSubmit(event) {
        event.preventDefault();
        const form = document.getElementById("loginForm")
        const formarea = document.getElementById("form-area")
        const email = form.email.value
        const password = form.password.value
        if (persistenceValue) {
            setPersistence(auth, browserLocalPersistence)
        } else {
            setPersistence(auth, browserSessionPersistence)
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Login สำเร็จ")
                getData(db)

            }).catch((error) => {
                event.preventDefault();
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

    useEffect(() => {
    })
    return (
        <div className="container mb-5" >
            <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col-md-9 col-lg-6 col-xl-5 border bg-white shadow p-5">
                    <img src="" className="border img-fluid" alt="Sample image"></img>
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 border bg-white shadow p-5">
                    <h5>ยินดีต้องรับสู่ Tell Your Story </h5>
                    <h2>เข้าสู่ระบบ</h2><br />
                    <div id="form-area">
                        <form id="loginForm" onSubmit={(event) => handleSubmit(event)}>
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
                            <div className="form-floating mb-4 form-group">
                                <input type="email" name="email" id="floatingEmail" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                                <label className="form-label text-end" htmlFor="floatingEmail">Email address</label>
                            </div>

                            {/**Password input */}
                            <div className="form-floating mb-3 form-group">
                                <input type="password" name="password" id="floatingPass" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" htmlFor="floatingPass">รหัสผ่าน</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/**Check box */}
                                <div className="form-check mb-0">
                                    <input name="persistenceValue" className="form-check-input me-2" type="checkbox" id="form2Example3" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        จดจำฉันไว้
                                    </label>
                                </div>
                                <a href="#!" className="text-body">ลืมรหัสผ่าน</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2 form-group">
                                <button type="submit" className="btn btn-primary btn-lg px-auto">Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">ยังไม่มีบัญชีหรอ?
                                    <a href="#!" className="ps-1 link-danger">สมัครเลย!</a>
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div >

    )

}