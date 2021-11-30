import axios from "axios";
import { Button } from "../components/Button/Button";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import '../styles/user.scss';


export function User() {    
    const history = useHistory();


    const params = useParams();
    const user = params.user;

    const [userDetails, setUserDetails] = useState({});
    /*const [userName, setUserName] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [userCompany, setUserCompany] = useState('');
    const [userLocation, setUserLocation] = useState('');
    const [userBiograph, setUserBiograph] = useState('');
    const [userFollowers, setUserFollowers] = useState('');
    const [userCreate, setUserCreate] = useState('');
    const [userRepos, setUserRepos] = useState('');*/

    axios.get(`https://api.github.com/users/${user}`).then(({data}) => 
        (
            setUserDetails({ data })
        )
    );

    async function handleHomePage(event) {
        event.preventDefault();

        history.push('/')
    }

    return (
        <div id="home-container">
            <main>
                { userDetails.name ? (
                        <div className="main-content">
                        <div class="wrapper">
                            <div class="left">
                                <img src={userDetails.avatar_url} alt="Avatar do usuario" width="100" />
                                <h4>{userDetails.name}</h4>
                                <p>{userDetails.bio}</p>
                            </div>
                            <div class="right">
                                <div class="info">
                                    <h3>Detalhes</h3>
                                    <div class="info_data">
                                        <div class="data">
                                            <h4>Companias</h4>
                                            <p>{userDetails.company}</p>
                                        </div>
                                        <div class="data">
                                            <h4>Endereço</h4>
                                            <p>{userDetails.location}</p>
                                        </div>
                                </div>
                                <div class="info_data">
                                        <div class="data">
                                            <h4>Seguidores:</h4>
                                            <p>{userDetails.followers}</p>
                                        </div>
                                        <div class="data">
                                            <h4>Data de criação</h4>
                                            <p>{userDetails.create_at}</p>
                                        </div>
                                </div>
                                <div class="info_data">
                                        <div class="data">
                                            <h4>Repositórios</h4>
                                            <p>{userDetails.public_repos}</p>
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