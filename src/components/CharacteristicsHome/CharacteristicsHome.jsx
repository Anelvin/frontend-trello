import React, {Component} from 'react';
import './CharacteristicsHome.scss';
import { Link } from 'react-router-dom';

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
                            <div className="block-list">
                                <div className="list">
                                    <span>En proceso</span>
                                    <div className="task">
                                        <div className="tag"></div>
                                        <p>Reuniones con clientes</p>
                                        <div className="description-task">
                                            <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c"  opacity=".3"></path> </svg>
                                            <div className="card-user-task">
                                                <img src="./img/avatar1.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="task">
                                        <div className="tag"></div>
                                        <p>Programar seminario web</p>
                                        <div className="description-task">
                                            <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" opacity=".3"></path> </svg>
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
                                        <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" opacity=".3"></path> </svg>
                                            <div className="card-user-task">
                                                <img src="./img/avatar2.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-list">
                                <div className="list">
                                    <span>Hecho</span>
                                    <div className="task">
                                        <div className="tag"></div>
                                        <p>Publicar podcast</p>
                                        <div className="description-task">
                                        <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" opacity=".3"></path> </svg>
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
                                        <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" opacity=".3"></path> </svg>
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
                <div className="characteristics-2">
                    <div className="image-characteristics-2">
                        <img src="./img/characteristics-home-2.JPG" alt=""/>
                    </div>
                    <div className="description-characteristics-2">
                        <h1>Información de un vistazo</h1>
                        <p>Profundice en los detalles añadiendo comentarios, archivos adjuntos, 
                            fechas de vencimiento y mucho más directamente en las tarjetas de Trello. 
                            Colabore en los proyectos de principio a fin.</p>
                    </div>
                </div>
                <div className="characteristics-3">
                    <div className="description-characteristics-3">
                        <h1>Automatización integrada de flujos de trabajo con Butler</h1>
                        <p>¡Deje que los robots hagan el trabajo! Impulse la productividad dando rienda suelta al 
                            poder de la automatización en todo su equipo con Butler y elimine esas tareas que tan 
                            poco le gustan de sus listas de cosas por hacer con:</p>
                            <ul>
                                <li>Desencadenadores basados en reglas</li>
                                <li>Botones personalizados en tarjetas y tableros</li>
                                <li>Comandos de calendario</li>
                                <li>Comandos de fecha de vencimiento</li>
                            </ul>
                    </div>
                    <div className="image-characteristics-3">
                        <img src="./img/characteristics-home-3.JPG" alt=""/>
                    </div>
                </div>
                <div className="characteristics-4">
                    <div className="description-characteristics-4">
                        <h1>Descubra cómo funciona</h1>
                        <p>Pase de las ideas a los actos en segundos con los sencillos e intuitivos tableros, listas y tarjetas de Trello.</p>
                    </div>
                    <div className="image-characteristics-4">
                        <img src="./img/characteristics-home-4.JPG" alt=""/>
                    </div>
                </div>
                <div className="characteristics-5">
                    <div className="description-characteristics-5">
                        <h1>Trello a su manera</h1>
                        <p>Use Trello del modo que crea oportuno para aprovechar al máximo las virtudes de 
                            su equipo. Somos lo bastante flexibles y ofrecemos funcionalidades de sobra para 
                            ajustarnos al estilo y las necesidades de cada equipo.</p>
                    </div>
                    <div className="image-characteristics-5">
                        <div>
                            <img className="img-description-home-5" src="./img/characteristics-home-5.JPG" alt=""/>
                            <h2>Manual de estrategia del equipo</h2>
                            <p>No encontrará complicaciones a la hora de configurar y poner a todo su equipo a 
                                trabajar con Trello. Hemos reunido todos los tableros y herramientas que necesita 
                                para lograr el éxito en un práctico recurso.</p>
                            <button>Trace un plan de juego</button>
                        </div>
                        <div>
                            <img className="img-description-home-5" src="./img/characteristics-home-6.JPG" alt=""/>
                            <h2>Una plataforma de productividad</h2>
                            <p>Integre directamente en su flujo de trabajo las aplicaciones que su equipo ya utiliza. 
                                Los Power-Up convierten los tableros de Trello en aplicaciones vivas para cumplir con las 
                                necesidades particulares de su equipo.</p>
                            <button>Impulse su flujo de trabajo</button>
                        </div>
                        <div>
                            <img className="img-description-home-5" src="./img/characteristics-home-7.JPG" alt=""/>
                            <h2>Siempre sincronizado</h2>
                            <p>Trello permanece sincronizado en todos sus dispositivos allá donde esté. Colabore con su equipo 
                                desde cualquier lugar, ya sea en el autobús o en la playa.</p>
                                <div className="download-app">
                                    <a href="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/eebf313cb223112b503b7322173b013c/btn-appstore-black.png">
                                        <img className="img-mobile" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/eebf313cb223112b503b7322173b013c/btn-appstore-black.png" alt="AppStore"/>
                                    </a>
                                    <a href="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/bcde9868a665af4ab4efe460c46fbc7b/btn-playstore-black.png">
                                        <img className="img-mobile" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/bcde9868a665af4ab4efe460c46fbc7b/btn-playstore-black.png" alt="PlayStore"/>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div>
                        <Link to="https://trello.com/templates">Plantillas</Link>
                        <Link to="https://trello.com/pricing">Precios</Link>
                        <Link to="https://trello.com/platforms">Aplicaciones</Link>
                        <Link to="https://www.atlassian.com/company/careers/trello">Trabajos</Link>
                        <Link to="https://blog.trello.com/">Blog</Link>
                        <Link to="https://developer.atlassian.com/cloud/trello/">Desarrolladores</Link>
                        <Link to="https://trello.com/about">Acerca de</Link>
                        <Link to="https://help.trello.com/">Ayuda</Link>
                        <Link to="https://www.atlassian.com/legal/cloud-terms-of-service">Legal</Link>
                        <Link to="https://trello.com/#">Configuración de las cookies</Link>
                        <Link to="https://www.atlassian.com/legal/privacy-policy">Privacidad</Link>
                    </div>
                    <div className="container-image-atlassian">
                        <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6cdbcb3dcf82bba860f1768d184161ee/atlassian-logo-gray-small.svg" alt=""/>
                    </div>
                    <div className="copyright">
                        <p> © Copyright 2020. Todos los derechos reservados.</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default CharacteristicsHome;