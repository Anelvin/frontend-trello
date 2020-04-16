import React, {Component} from 'react';
import './CharacteristicsHome.scss';

class CharacteristicsHome extends Component {

    render(){
        return(
            <div className="body-characteristics-home">
                <div className="characteristics-1">
                    <div className="description-characteristics-1">
                        <h1>Trabaje con cualquier equipo</h1>
                        <p>Ya sea para un trabajo, un proyecto o incluso
                            las próximas vacaciones en familia, Trello ayuda a tu
                            equipo a permanecer organizado.
                        </p>
                        <button>Empiece a →</button>
                    </div>
                    <div className="board-characteristics-1">
                        <span>Tareas de equipo</span>
                        <div className="tasks-list">
                            <div className="list">
                                <span>En proceso</span>
                                <div className="task">
                                    <div className="tag"></div>
                                    <p>Reuniones con clientes</p>
                                    <div className="description-task">
                                        <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                                        <div className="card-user-task">
                                            <img src="./img/avatar1.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="task">
                                    <div className="tag"></div>
                                    <p>Programar seminario web</p>
                                    <div className="description-task">
                                        <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                                        <div className="card-user-task">
                                            <img src="./img/avatar1.png" alt=""/>
                                            <img src="./img/avatar3.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="task">
                                    <div className="tag"></div>
                                    <p>Enviar boletín por correo electrónico</p>
                                    <div className="description-task">
                                    <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                                        <div className="card-user-task">
                                            <img src="./img/avatar2.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list">
                                <span>Hecho</span>
                                <div className="task">
                                    <div className="tag"></div>
                                    <p>Publicar podcast</p>
                                    <div className="description-task">
                                    <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                                        <div className="card-user-task">
                                            <img src="./img/avatar2.png" alt=""/>
                                            <img src="./img/avatar3.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="task">
                                    <div className="tag"></div>
                                    <p>Lanzar sitio web</p>
                                    <div className="description-task">
                                    <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fill-rule="evenodd" opacity=".3"></path> </svg>
                                        <div className="card-user-task">
                                            <img src="./img/avatar2.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacteristicsHome;