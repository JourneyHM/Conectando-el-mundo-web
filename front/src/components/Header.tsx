import {Grid} from '@mui/material'
import Agenda from "./../static/images/Agenda.svg"
import './Header.css'

function Header(){
    return(
        <Grid container justifyContent = "center" spacing = {2}>
            <Grid item>
                <label className = "Title">WebPlannerPro</label>
            </Grid>
            <Grid item>
                <img src = {Agenda} alt = "Agenda" width = "120" height = "110.66" />
            </Grid>
        </Grid>
    );
}

export default Header;