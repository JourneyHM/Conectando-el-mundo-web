import './TextBox.css'

// Like an struct in C
// Properties of our customized textBox
interface TextBoxProps{
    type?: string
    initial_value?: string
    onChange?: (event: any) => void
}

function TextBox(props: TextBoxProps){
    return(
        <input type = {props.type} onChange = {props.onChange} value = {props.initial_value} className = "TextBox"></input>
    );
}

export default TextBox;