import Container from "../Container";
import Form from "./style-login";
import classes from '../../App.module.css';
import Input from "../Input";
import Button from "../Button";

const Login = () => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <Container>
            <Form onSubmit={onSubmitHandler}>
                <div className={classes.row}>
                    <label htmlFor="user">User</label>
                    <Input 
                    type="text"
                    name="user"
                    id="user"
                    onChange={onChangeHandler}
                    placeholder="user_master"
                    />
                </div>
                <div className={classes.row}>  
                    <label htmlFor="password">Password</label>
                    <Input 
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChangeHandler}
                    />
                </div>
                <Button text='Login' mode='login' />
            </Form>
        </Container>
    );
};

export default Login;