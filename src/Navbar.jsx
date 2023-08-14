//Import css
import { db, auth } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './App.css';

//Import logo image
import Logo from './Logo.png';

//Import function Link -> like a tag.
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navigation(data) {
    const navigate = useNavigate()

    //login state (Default is -1 because app doesn't know login state)
    const [check, setCheck] = useState(-1)

    //Check login state from parentChild(App.jsx)
    if (data.login != check) {
        setCheck(data.login)
    }

    //Logout or Signout function
    function handleLogout() {
        signOut(auth).then(() => {
            alert("ออกสู่ระบบ")
            navigate('/')
        }).catch((error) => {
            alert(error.message)
        })
    }

    //Function for change navagition when know login state
    useEffect(() => {
        const profile = document.getElementById("profile")
        const navbeforeLogin = document.getElementById("beforeLogin")
        if (check == 1) {
            profile.style.display = "block"
            navbeforeLogin.style.display = "none"
        } else {
            profile.style.display = "none"
            navbeforeLogin.style.display = "flex"
        }
    })

    return (
        <div className='container mb-5' >
            <nav className="nav navbar navbar-expand-lg">
                <div className='container-fluid'>
                    <Link className='ImgBrand text-start' to="/">
                        <img className='img-fluid d-inline-block align-text-top' src={Logo} alt='Tell Your story' ></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='navbar-nav me-auto ms-4 mb-2 mb-lg-0 text-end'>
                            <CustomLink to="/" onClick={(event) => loginDBPass(event)}>หน้าหลัก</CustomLink>
                            <CustomLink to="/Consult" onClick={(event) => loginDBPass(event)}>ปรึกษา </CustomLink>
                            <CustomLink to="/Talkingarea" onClick={(event) => loginDBPass(event)}>พื้นที่พูดคุย</CustomLink>
                            <CustomLink to="/Engagement" onClick={(event) => loginDBPass(event)}>การนัดหมาย</CustomLink>
                            <CustomLink to="/Contact" onClick={(event) => loginDBPass(event)}>ติดต่อ</CustomLink>
                        </ul>
                        <ul id="beforeLogin" className={'align-self-end navbar-nav text-end'}>
                            <CustomLink classN="fw-bold" to="/Signin">ล็อกอิน</CustomLink>
                            <CustomLink classN="fw-bold rigister rounded-pill px-3 text-white" to="/Signup">สร้างบัญชี</CustomLink>

                        </ul>
                        <div id="profile" className='dropdown'>
                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownProfile" data-bs-toggle="dropdown" aria-expanded="false">
                                Profile
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownProfile">
                                <li><Link className="dropdown-item" to="/Setting">แก้ไขโปรไฟล์</Link></li>
                                <li className='text-center'><button id="profile" className='btn btn-dark ' onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </nav>

        </div>

    );

}

function CustomLink({ classN, to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            < Link className={" nav-link pe-0 pe-lg-2"} to={to} {...props}>
                <p className={classN}>{children}</p>

            </Link >

        </li >
    )
}

function loginDBPass(event) {
    console.log(window.location.pathname)
    if (window.location.pathname == "/Test") {
        event.preventDefault();
    }
}