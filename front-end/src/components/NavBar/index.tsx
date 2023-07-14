import { NavbarStyles } from "./styles";
import classes from '../../App.module.css';

const NavBar = () => {
    return (
        <nav className={classes.navbar}>
            <NavbarStyles>
                <li>
                    <a href="http://">Patients</a>
                </li>
                <li>
                    <a href="http://">Doctors</a>
                </li>
                <li>
                    <a href="http://">Appointments</a>
                </li>
            </NavbarStyles>
        </nav>
    )
};

export default NavBar;