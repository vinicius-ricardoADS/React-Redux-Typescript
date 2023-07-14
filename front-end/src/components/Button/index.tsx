import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

import ButtonStyle from "./style";

type ButtonProps = {
    text: string
    mode: string;
};


const Button = (props: ButtonProps) => {

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
    }

    const loginHandler = () => {
        dispatch(authActions.login());
    }

    const buttonLoginStyle = {
        backgroundColor: '#c3d8ff',
        color: 'black',
        borderColor: 'black',
        marginTop: '15px',
        height: '34px',
        borderRadius: '6px',
    }

    return (
        (props.mode === 'login' ? (
            <ButtonStyle onClick={loginHandler} style={buttonLoginStyle}>{props.text}</ButtonStyle>
        ) : (
            <ButtonStyle onClick={logoutHandler}>{props.text}</ButtonStyle>
        ))
        
    )
};

export default Button;