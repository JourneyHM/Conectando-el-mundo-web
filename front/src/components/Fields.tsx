import {useState} from 'react';
import {Grid} from '@mui/material'
import TextBox from './TextBox'
import './Fields.css'

// Like a struct in C
// showPasssword for pass atributtes between components (functions) 
interface FieldsProps{
    showPassword:boolean
}

function Fields(props:FieldsProps){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    function onChangeInputUser(event: any){
        const {value} = event.target
        setUser(value)
    }

    function onChangeInputPassword(event: any){
        const {value} = event.target
        setPassword(value)
    }

    return(
        <Grid container direction = "column" spacing = {2} columnSpacing = {2} justifyContent = "center" width = "450px">
            <Grid container justifyContent = "right"  paddingY = {1}>
                <Grid item justifyContent = "left" width = {150}>
                    <label className = "Text">Usuario: </label>
                </Grid>
                <Grid item>
                    <TextBox type = "text" onChange = {onChangeInputUser} initial_value = {user}></TextBox>
                </Grid> 
            </Grid>
            <Grid container justifyContent = "right" paddingY = {1}>
                <Grid item justifyContent = "left" width = {150}>
                    <label className = "Text">Contraseña: </label>
                </Grid>
                <Grid item>
                    <TextBox type = {props.showPassword? "text":"password" } onChange = {onChangeInputPassword} initial_value = {password}></TextBox>
                </Grid> 
            </Grid>
        </Grid>
    );
}

export default Fields;
