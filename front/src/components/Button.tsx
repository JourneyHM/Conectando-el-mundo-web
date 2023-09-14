import './Button.css'

// Like an struct in C
interface ButtonProps{
    title?: string;
    onPress?: () => void
}

function Button(props: ButtonProps){
    return(
        <button onClick = {props.onPress} className = "Button">{props.title}</button>
    );
}

export default Button;
