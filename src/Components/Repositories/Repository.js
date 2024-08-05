import styled from "styled-components";

// Define el modelo del repositorio
export const RepositoryModel = {
    name: '',
    link: '',
    description: '',
    size: 0,
    language: '',
    stars: 0,
    forks: 0
};

// Función para mapear los datos de la API al modelo
export function mapDtoModel(dto) {
    return {
        name: dto.name,
        link: dto.html_url,
        description: dto.description,
        size: dto.size,
        language: dto.language,
        stars: dto.stargazers_count,
        forks: dto.forks_count
    };
}

// Estilos usando styled-components
const Projects = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: calc(33.33% - 16px)!important;
    background: black;
    border-radius: 4px;
    margin: 8px;
    padding: 32px;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 0.1);
    color: #ccc;
    box-sizing: border-box;
`;

const Top = styled.div``;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
`;
const Name = styled.div`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 16px;
`;
const Link = styled.a`
    font-weight: 700;
    color: white;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const Linkicon = styled.i`
    margin-right: 8px;
`;
const Description = styled.div`
    font-size: 18px;
    margin-bottom: 32px;
`;
const Stats = styled.div`
    flex-grow: 1;
    display: flex;
`;

const StatInfo = styled.span`
    margin-right: 16px;
`;

const StatIcon = styled.i`
    margin-right: 4px;
`;
const Size = styled.div``;

// Componente funcional de React para representar un repositorio
export function Repository({ repository }) {
    return (
        <Projects>
            <Top>
                <Name>
                    <Link href={repository.link} target="_blank" rel="noopener noreferrer" aria-label={repository.name}>
                        <Linkicon className='fab fa-github'>
                            {repository.name}
                        </Linkicon>
                    </Link>
                </Name>
                <Description>{repository.description}</Description>
            </Top>
            <Bottom>
                
                <Stats>
                    <StatInfo>{repository.language}</StatInfo>
                    <StatInfo><StatIcon className="fas fa-star">{repository.stars}</StatIcon></StatInfo>
                    <StatInfo><StatIcon className="fas fa-code-branch">{repository.forks}</StatIcon></StatInfo>
                    <Size>{repository.Size} KB</Size>
                </Stats>
            </Bottom>
        </Projects>
    );
}
