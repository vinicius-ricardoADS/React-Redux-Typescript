import { useSelector } from "react-redux";

import { HeaderStyle } from "./styles";
import Brand from "../Brand";
import NavBar from "../NavBar";
import IAuth from "../../types/Auth";

function Header() {

    const isAuth = useSelector((state: IAuth) => state.auth.isAuthenticated);

    return (
        <HeaderStyle>
            <Brand />
            {isAuth && <NavBar />}
        </HeaderStyle>
    )
}

export default Header;