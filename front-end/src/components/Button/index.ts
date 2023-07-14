import { styled } from "styled-components";

const Button = styled.button`
    border-color: #beeded;
    border-radius: 15px;
    padding: 0.15rem 1.5rem;
    background-color: #34343a;
    color: #75ffff;
    &:hover {
        background-color: #5c5c88;
        color: white;
        border-color: #76768d;
    }
`;

export default Button;