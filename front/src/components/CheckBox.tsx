import {useState} from 'react';
import {Grid} from "@mui/material"
import './CheckBox.css'

// Like an struct in C
interface CheckBoxProps{
    text?: string,
    onCheck:()=>void
}

function CheckBox(props: CheckBoxProps){
    const [checked,setChecked]=useState(false)
    
    function toggle(){
        setChecked(!checked)
        props.onCheck()
    }
    return(
        <Grid container justifyContent = "center" paddingY = {2.5} paddingLeft = {8}>
            <Grid item justifyContent = "center">
                <input type = "checkbox" className = "CheckBox" checked = {checked} onClick = {toggle}></input>
            </Grid>
            <Grid item justifyContent = "center">
                <label className = "Text">{props.text}</label>
            </Grid>
        </Grid>
    );
}

export default CheckBox;