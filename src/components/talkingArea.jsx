import { db } from '../firebase'
import WebTest from "./test"
import { collection, getDocs } from 'firebase/firestore'

// Acess to the Firestore database

// Get User from database
async function getUser(db) {
    const userRef = collection(db, 'User')
    const userSnap = await getDocs(userRef)
    return userSnap
}

// Display User data (Test)
function showUser(user) {
    const u = user.data()
    console.log("Email :" + u.Email + "\nName: " + u.Firstname)
    text += u.Email + ", "
}

const userDB = await getUser(db)
let text = ""


export default function TalkingArea() {

    function test() {
        text = ""
        userDB.forEach(user => {
            showUser(user)

        })
        text = text.slice(0, -2)
        console.log(1)
    }
    return (

        <div className="container consultPage" onLoad={test()}>
            <h1>Talking Area</h1>
            <div className="col-12 mb-5 searchArea d-inline-flex justify-content-center">
                <form id="formSearch" className="d-flex align-items-center border rounded-pill p-3 me-3">
                    <i className="bi bi-search"></i>
                    <select className="select form-control me-2 rounded-pill choices-multiple-remove-button" multiple type="search" placeholder="Type..." aria-label="Search">
                        <option value="1">{text}</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                        <option value="6">Six</option>
                        <option value="7">Seven</option>
                        <option value="8">Eight</option>
                        <option value="9">Nine</option>
                        <option value="10">Ten</option>
                    </select>
                </form>
                <button className="btn rounded-pill px-4 fs-5" form="formSearch" type="submit">
                    <i className="bi bi-search pe-2"></i>ค้นหา
                </button>
            </div>
            <WebTest />
        </div>

    );
}