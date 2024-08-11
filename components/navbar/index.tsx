import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars, faUser
} from "@fortawesome/free-solid-svg-icons";
import styles from './navbar.module.css';
import Logo from "../logo";
import Link from "next/link";
import { logout } from "../../store/reducer/authReducer";
import { useDispatch } from "react-redux";

const Navbar = ({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean, setSidebarOpen: (sidebarOpen: boolean) => void }) => {

    const dispatch = useDispatch();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className={`navbar navbar-expand-lg ${styles.navbarBg}`}>
            <div className="container-fluid">
                <div className="d-flex p-4">
                    <div className="d-flex align-items-center me-5" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <FontAwesomeIcon icon={faBars} className="cursor-pointer" />
                    </div>
                    <Logo />
                </div>
                <div className="d-flex ms-auto p-3">
                    <div className="d-flex align-items-center">
                        <div className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <FontAwesomeIcon icon={faUser} className={`${styles.navbarToggle} cursor-pointer`} /> {/* Example icon */}
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton1">
                                <li><Link href='/login' className="dropdown-item" onClick={() => dispatch(logout())}>Logout</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;