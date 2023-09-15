import "./MainPage.css"
import { Grid } from "@mui/material";
import Agenda from "./../static/images/icon.png"
import User from "./../static/images/user.png"
import Options from "./../static/images/options.png"
import Anuncio from "./../static/images/anuncio.png"

function MainPage(){
    return (
        <div className="MainPage">
            <Grid container>
                <Grid item xs = {4}>
                    <h1 className="Title">WebPlannerPro
                        <img src = {Agenda} width="50" height="50" alt = "Agenda"/>
                    </h1>
                </Grid>
                <Grid item xs = {4}>
                </Grid>
                <Grid>
                <div className="dropdown">
                        <h1 className="User">
                            <img src={User} width="35" height="35" alt="Usuario"/>
                            &nbsp;Juan Francisco Sánchez Sánchez&nbsp;
                            <img src={Options} width="20" height="20" alt="Options"/> 
                        </h1>
                    <div className="dropdown-content">
                            <a href = "http://127.0.0.1:3000" className = "nav-link">Salir</a>
                    </div>
                </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs= {4}>
                <br></br>
                <br></br>
                    <div className="square">
                        <h2 className="CuadroEmergente">Notas</h2>
                        <p>Este es el contenido de la nota. Puedes escribir lo que desees aquí.</p>
                        <br></br>
                        <button className="note-button">Editar</button> 
                    </div>
                </Grid>
                <Grid item xs = {4}>
                    <h2 className="Event-Title">Eventos<img src={Anuncio} width="50" height="50" alt = "Altavoz"/></h2>
                    <div className="ad-container">
                        <div className="ad">
                            <h4 className="ad-title">Tiempo restante para el próximo evento:</h4>
                            <p className="ad-content">- 12 días -</p>
                        </div>
                        <div className="ad">
                            <h4 className="ad-title">Esquema ideal de preparación para tu próximo evento:</h4>
                            <p className="ad-content">- 1 hora diaria -</p>
                        </div>
                    </div>
                    <br></br>
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
                <Grid item xs = {4}>
                    <br></br>
                    <br></br>
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
                    <Grid container>
                        <Grid item xs = {6}>
                            <button className="add-button">Agregar</button>
                        </Grid>
                        <Grid item xs = {6}>
                            <button className="add-button">Eliminar</button>
                        </Grid>
                    </Grid>
                </div>
                </Grid>
            </Grid>
            <br></br>
            <Grid container>
                <Grid item xs= {4}>
                </Grid>
                <Grid item xs = {8}>
                </Grid>
            </Grid>
        </div>
    );
}
export default MainPage;