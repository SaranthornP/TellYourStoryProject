import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"
import WebTest from "./test"

async function getUser(db) {
    const userCol = collection(db, 'User')
    const userSnapshot = await getDocs(userCol)
    return userSnapshot
}

async function getTag(db) {
    const tagCol = collection(db, 'Tag')
    const tagSnapshot = await getDocs(tagCol)
    return tagSnapshot
}

function showData(user) {
    console.log(user.data().Email)
}

function showTag(tag) {
    const tagArr = tag.data().TagName
    tagArr.forEach(element => {
        console.log(element)
    });

}

const data = await getUser(db)
data.forEach(User => {
    showData(User)
})

const tagData = await getTag(db)
tagData.forEach(Tag => {
    showTag(Tag)
})


export default function TalkingArea() {

    return (

        <div className="container consultPage">
            <h1>Talking Area</h1>
            <div className="col-12 mb-5 searchArea d-inline-flex justify-content-center">
                <form id="formSearch" className="d-flex align-items-center border rounded-pill p-3 me-3">
                    <i className="bi bi-search"></i>
                    <select className="select form-control me-2 rounded-pill choices-multiple-remove-button" multiple type="search" placeholder="Type..." aria-label="Search">
                        <option value="1">One</option>
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