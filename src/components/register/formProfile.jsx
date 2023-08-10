import "../../App.css"
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { db, auth } from "../../firebase"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export default function Register() {
    const user = auth.currentUser;
    async function getData(db, firstname, surname) {
        const u = auth.currentUser;
        const userFind = doc(db, "User", u.email)
        const userSnap = await getDoc(userFind)
        if (userSnap.exists()) {
            await updateDoc(doc(db, 'User', user.email), {
                Firstname: firstname,
                Surname: surname
            })
            alert("Update Profile เรียบร้อย")
        } else {
            setDoc(doc(db, 'User', user.email), {
                Firstname: firstname,
                Surname: surname
            })
            alert("สร้าง Profile เรียบร้อย")
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        const form = document.getElementById("RegisterForm")
        const firstname = form.firstname.value
        const surname = form.surname.value
        if (firstname != "" && surname != "") {
            getData(db, firstname, surname)
        }
        else alert("โปรดกรอกข้อมูล")

    }

    return (
        <div className="container mb-5" >
            <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col-md-8 col-lg-6 border bg-white shadow p-5">
                    <h5>สมัครบัญชี Tell Your Story</h5>
                    <h2>ข้อมูลส่วนตัว</h2><br />
                    <div className="form-area">
                        <form id="RegisterForm" onSubmit={(event) => handleSubmit(event)}>
                            <div className="row">
                                <div className="form-floating mb-4 form-group col-12 col-lg-6">
                                    <input type="text" name="firstname" id="floatingFS" className="form-control form-control-lg" placeholder="Enter Firstname" />
                                    <label className="form-label ms-3" htmlFor="floatingFS">ชื่อจริง</label>
                                </div>
                                <div className="form-floating mb-4 form-group col-12 col-lg-6">
                                    <input type="text" name="surname" id="floatingLS" className="form-control form-control-lg" placeholder="Enter Lastname" />
                                    <label className="form-label ms-3" htmlFor="floatingLS">นามสกุล</label>
                                </div>
                            </div>

                            <div className="form-floating mb-4 form-group">
                                <input type="text" name="display" id="floatingDS" className="form-control form-control-lg" placeholder="Enter Display" />
                                <label className="form-label" htmlFor="floatingDS">ชื่อที่ใช้แสดงโปรไฟล์ </label>
                            </div>

                            <input type="date" name="date" id="Date" className="form-control form-control-lg mb-4" />

                            <select className="form-select" name="gender" aria-label="Gender">
                                <option disabled selected>เลือกเพศของคุณ</option>
                                <option value="ชาย">ชาย</option>
                                <option value="หญิง">หญิง</option>
                                <option value="อื่นๆ">อื่นๆ</option>
                            </select>


                            <p className="text-center small fw-bold mt-4 pt-2 mb-0">กด เสร็จสิ้น เพื่อสมัครบัญชีให้เสร็จแล้วเริ่มต้นการใช้งานได้เลย </p>
                            <div className="d-flex text-lg-start mt-2 form-group justify-content-center">

                                <button type="submit" className="btn btn-primary btn-lg px-auto">เสร็จสิ้น</button>
                            </div>



                        </form>

                    </div>


                </div>
            </div>

        </div >

    )
}