import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Container from "../Container";
import Title from "../Title";
import { mapDtoModel } from './Repository';
import { Repository } from './Repository'; // Importa el componente Repository

const Projects = styled.div`
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
`;

export function Repositories() {
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://api.github.com/users/EstP19/repos')
            .then(response => {
                const mappedRepos = response.data.map(mapDtoModel);
                setRepos(mappedRepos);
            })
            .catch(error => setError(error));
    }, []);

    if (error) return <div>Error: {error.message}</div>;

    return (
        <Container>
            <Title>Repositorios</Title>
            <Projects>
                {repos.map((repo) => (
                    <Repository key={repo.name} repository={repo} />
                ))}
            </Projects>
        </Container>
    );
}
