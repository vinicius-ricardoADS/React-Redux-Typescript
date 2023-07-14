import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

import { NavbarStyles } from "./styles";
import classes from '../../App.module.css';
import Button from "../Button";

const NavBar = () => {
    
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
    }

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
                <li>
                    <Button onClick={logoutHandler}>
                        Logout
                    </Button>
                </li>
            </NavbarStyles>
        </nav>
    )
};

export default NavBar;