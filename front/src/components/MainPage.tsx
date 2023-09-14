import "./MainPage.css"
import { Grid } from "@mui/material";
import Button from './Button'
import Agenda from "./../static/img/icon.png"
import User from "./../static/img/user.png"

function MainPage(){
    return (
        <div className="MainPage">
            <Grid container>
                <Grid item xs = {6}>
                    <h1 className="Title">WebPlannerPro
                        <img src={Agenda} width="50" height="50"/>
                    </h1>
                </Grid>
                <Grid item xs = {6}>
                <div className="dropdown">
                    <button className="dropbtn">
                        <h1 className="Title">
                            <img src={User} width="50" height="50" alt="Usuario"/>
                            Usuario
                        </h1>
                    </button>
                    <div className="dropdown-content">
                            <a href="#" className="nav-link">Salir</a>
                    </div>
                </div>
                </Grid>
            </Grid>
            <br></br>
            <Grid container>
                <Grid item xs= {4}>
                    <div className="square">
                        <h2 className="CuadroEmergente">Notas</h2>
                        <p>Este es el contenido de la nota. Puedes escribir lo que desees aquí.</p>
                        <button className="add-button">Editar</button> 
                    </div>
                </Grid>
                <Grid item xs = {8}>
                    <h2 className="Title">Eventos</h2>
                    <p>
                        Aquí podrás ver desplegados todos los eventos registrados al momento generados por tí.
                    </p>
                </Grid>
            </Grid>
            <br></br>
            <Grid container>
                <Grid item xs= {4}>
                <div className="todo-box">
                <h2 className="CuadroEmergente">Pendientes</h2>
                    <div className="todo-item">
                        <div className="todo-checkbox">
                            <input type="checkbox" id="task1" />
                            <label htmlFor="task1"></label>
                        </div>
                        <div className="todo-text">Tarea 1</div>
                    </div>
                    <div className="todo-item">
                        <div className="todo-checkbox">
                            <input type="checkbox" id="task2" />
                            <label htmlFor="task2"></label>
                        </div>
                        <div className="todo-text">Tarea 2</div>
                    </div>
                    <br></br>
                    <button className="add-button">Agregar</button>
                </div>
                </Grid>
                <Grid item xs = {8}>
                    <div className="agenda">
                        <table className="table table-condensed table-bordered">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Tiempo</th>
                                    <th>Evento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="agenda-date">
                                        <div className="dayofmonth">26</div>
                                        <div className="dayofweek">Martes</div>
                                        <div className="shortdate text-muted">Septiembre, 2023</div>
                                    </td>
                                    <td className="agenda-time">
                                        5:00 PM
                                    </td>
                                    <td className="agenda-events">
                                        <div className="agenda-event">
                                            Examen Final Algoritmos
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="agenda-date">
                                        <div className="dayofmonth">20</div>
                                        <div className="dayofweek">Viernes</div>
                                        <div className="shortdate text-muted">Octubre, 2023</div>
                                    </td>
                                    <td className="agenda-time">
                                        9:00 PM 
                                    </td>
                                    <td className="agenda-events">
                                        <div className="agenda-event">
                                            Presentación Final 
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs ={4}>
                </Grid>
                <Grid item xs = {8}>
                    <Button></Button>
                </Grid>
            </Grid>
        </div>
    );
}
export default MainPage;