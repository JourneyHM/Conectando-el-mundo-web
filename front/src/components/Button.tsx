import './Button.css'

// Like an struct in C
interface ButtonProps{
    title?: string;
    onPress?: () => void
}

function Button(props: ButtonProps){
    return(
        <button onClick = {props.onPress} className = "Button">Ver esquema</button>
    );
}

export default Button;
