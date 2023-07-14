import InputStyle from "./style";

type InputProps = {
    type: string;
    name: string;
    id: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
}

const Input = (props: InputProps) => {
    return (
        <InputStyle
        type={props.type}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        placeholder={props.placeholder}
        />
    );
};

export default Input;