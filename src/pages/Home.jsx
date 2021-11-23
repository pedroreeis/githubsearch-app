import { useHistory } from 'react-router-dom'

import '../styles/home.scss';
import logoImage from '../images/github-search.png';

import { Button } from '../components/Button/Button';
import { useState } from 'react';


export function Home() {
    const history = useHistory();

    const [userProfile, setUserProfile] = useState('');

    async function handleFindProfile(event) {
        event.preventDefault();
        
        if (userProfile.trim() === '') return;

        history.push(`/user/${userProfile}`);
    }

    return (
        <div id="home-container">
            <main>
                <div className="main-content">
                    <img src={logoImage} alt="Logomarca do projeto." />

                    <h2>Busque qualquer perfil do Github.</h2>
                    <p>Para toda pesquisa, existe uma resposta.</p>

                    <form onSubmit={handleFindProfile}>
                        <input 
                            placeholder="Exemplo: queendeveloperbr"
                            onChange={event => setUserProfile(event.target.value)}
                            value={userProfile}
                        />

                        <Button type="submit">
                            Buscar
                        </Button>
                    </form>

                </div>
            </main>
        </div>
    )
}