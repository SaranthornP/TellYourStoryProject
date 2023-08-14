import "../App.css"
import { useEffect, useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../firebase"
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

export default function Setting() {
    const navigate = useNavigate();
    const [windowValue, setWindow] = useState("Profile")
    const handleProfile = (event) => {
        event.preventDefault()
        setWindow("Profile")
    }

    const handleAccount = (event) => {
        event.preventDefault();
        setWindow("Account")
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
    useEffect(() => {
        const profile = document.getElementById("ProfileSetting")
        const account = document.getElementById("AccountSetting")
        if (windowValue == "Profile") {
            profile.style.display = "block"
            account.style.display = "none"
        } else {
            profile.style.display = "none"
            account.style.display = "block"
        }
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-2">
                    <p onClick={(event) => handleProfile(event)}>Profiles</p><hr />
                    <p onClick={(event) => handleAccount(event)}>Accout</p>

                </div>
                <div className="col-12 col-lg-10">
                    <Profile />
                    <Account />
                </div>
            </div>
        </div>
    )

}

function Profile() {
    return (
        <div id="ProfileSetting">
            Profile
        </div>
    )
}

function Account() {
    return (
        <div id="AccountSetting">
            Account
        </div>
    )
}