//Import css
import { auth } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './App.css';

//Import logo image
import Logo from './Logo.png';

//Import function Link -> like a tag.
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { Component } from 'react';


function Hook() {
    const navigatet = useNavigate();
    navigatet('/');
}

export default class Navigation extends Component {

    state = {
        check: 0
    }

    handleLogout() {
        signOut(auth).then(() => {
            alert("ออกสู่ระบบ")
            Hook()

        }).catch((error) => {
            alert(error.message)
        })
    }
    handleSignin() {
        const profile = document.getElementById("profile")
        const navbeforeLogin = document.getElementById("beforeLogin")
        this.setState({ check: 1 })
        profile.style.display = "block"
        navbeforeLogin.style.display = "none"
    }
    handleSignout() {
        this.setState({ check: 0 })
        const profile = document.getElementById("profile")
        const navbeforeLogin = document.getElementById("beforeLogin")
        profile.style.display = "none"
        navbeforeLogin.style.display = "flex"
    }
    //login

    render() {
        if (this.props.login == 1) {
            this.handleSignin
        } else if (this.state.check == 1) {
            this.handleSignout
        }
        return (
            <div className='container mb-5'>
                <nav className="nav navbar navbar-expand-lg">
                    <div className='container-fluid'>
                        <Link className='ImgBrand text-start' to="/">
                            <img className='img-fluid d-inline-block align-text-top' src={Logo} alt='Tell Your story' ></img>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className='navbar-nav me-auto ms-4 mb-2 mb-lg-0 text-end'>
                                <CustomLink to="/">หน้าหลัก {this.props.num + " " + this.state.check}</CustomLink>
                                <CustomLink to="/Consult">ปรึกษา {this.props.login}</CustomLink>
                                <CustomLink to="/Talkingarea">พื้นที่พูดคุย</CustomLink>
                                <CustomLink to="/Engagement">การนัดหมาย</CustomLink>
                                <CustomLink to="/Contact">ติดต่อ</CustomLink>
                            </ul>
                            <ul id="beforeLogin" className={'align-self-end navbar-nav text-end'}>
                                <CustomLink classN="fw-bold" to="/Signin">ล็อกอิน</CustomLink>
                                <CustomLink classN="fw-bold rigister rounded-pill px-3 text-white" to="/Signup">สร้างบัญชี</CustomLink>

                            </ul>
                            <div id="profile" className={""} onClick={this.handleLogout}>
                                <button id="profile" className='btn btn-dark'>Logout</button>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>

        );
    }
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
