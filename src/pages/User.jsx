import axios from "axios";
import { Button } from "../components/Button/Button";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import '../styles/user.scss';


export function User() {    
    const history = useHistory();


    const params = useParams();
    const user = params.user;

    const [userName, setUserName] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [userCompany, setUserCompany] = useState('');
    const [userLocation, setUserLocation] = useState('');
    const [userBiograph, setUserBiograph] = useState('');
    const [userFollowers, setUserFollowers] = useState('');
    const [userCreate, setUserCreate] = useState('');
    const [userRepos, setUserRepos] = useState('');

    axios.get(`https://api.github.com/users/${user}`).then(({data}) => 
        (
            setUserName(data.name), setUserAvatar(data.avatar_url), setUserCompany(data.company ? data.company : "Indefinido"),
            setUserLocation(data.location ? data.location : "Indefinido"), setUserBiograph(data.bio ? data.bio : "Indefinido"), setUserFollowers(data.followers),
            setUserCreate(data.created_at), setUserRepos(data.public_repos ? data.public_repos : "Indefinido")
        )
    );

    async function handleHomePage(event) {
        event.preventDefault();

        history.push('/')
    }

    return (
        <div id="home-container">
            <main>
                { userName ? (
                        <div className="main-content">
                        <div class="wrapper">
                            <div class="left">
                                <img src={userAvatar} alt="Avatar do usuario" width="100" />
                                <h4>{userName}</h4>
                                <p>{userBiograph}</p>
                            </div>
                            <div class="right">
                                <div class="info">
                                    <h3>Detalhes</h3>
                                    <div class="info_data">
                                        <div class="data">
                                            <h4>Companias</h4>
                                            <p>{userCompany}</p>
                                        </div>
                                        <div class="data">
                                            <h4>Endereço</h4>
                                            <p>{userLocation}</p>
                                        </div>
                                </div>
                                <div class="info_data">
                                        <div class="data">
                                            <h4>Seguidores:</h4>
                                            <p>{userFollowers}</p>
                                        </div>
                                        <div class="data">
                                            <h4>Data de criação</h4>
                                            <p>{userCreate}</p>
                                        </div>
                                </div>
                                <div class="info_data">
                                        <div class="data">
                                            <h4>Repositórios</h4>
                                            <p>{userRepos}</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ) : (
                        <div className="main-content">
                        <h2>Nenhum perfil encontrado.</h2>

                        
                        <Button onClick={handleHomePage}>
                             Voltar ao inicio
                        </Button>
                        
                    </div>
                ) }
            </main>
        </div>
        )
}