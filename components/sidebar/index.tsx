
import Image from "next/image";
import styles from './sidebar.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse
} from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
    return (
        <div className={`d-flex flex-column flex-shrink-0 p-3 text-white ${styles.sidebar}`}>
            <ul className="nav nav-pills flex-column mb-auto pt-4">
                <li className="nav-item cursor-pointer">
                    <span className={`${styles.sidebarItem}`} aria-current="page">
                        <FontAwesomeIcon icon={faHouse} width={20} /> &nbsp;
                        Home
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;