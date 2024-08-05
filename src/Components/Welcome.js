import styled from "styled-components"

const Wrapper = styled.div`
    padding: 120px 100px;
    margin: 51px auto 0;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh 51px);
    max-width: 1140px;
    box-sizing: border-box;
`;

const Titulo = styled.h1`
    font-weight: 300;
    font: 2.5rem;
    margin: 16px 0;
`;

const Subtitulo = styled.h2`
    font-weight: 300;
    font: 2.5rem;
    margin-bottom: 40px 0;
`;

const Social = styled.div``;
const Sociallink = styled.a`
    text-decoration: underline;
    margin-right: 16px;

    &:last-child{
        margin-right: 0;
    }
`;

const Socialicon = styled.i`
    color: black;
    padding: 8px;
    font-size: 48px;
`;

const SocialModul = [
    { name: 'Github', icono: 'fab fa-github', url: 'https://github.com/EstP19' },
    { name: 'Linkedin', icono: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/esteb2001' }
];

export function Welcome() {
    return (
        <Wrapper>
            <Titulo>Hola a todos soy Esteban</Titulo>
            <Subtitulo>Un desarrollador full stack en proceso con una creciente pasión por crear soluciones completas y funcionales en el ámbito del desarrollo web. Actualmente, estoy en una fase activa de formación y práctica, desarrollando habilidades tanto en el front-end como en el back-end para contribuir de manera integral en proyectos de desarrollo de software.</Subtitulo>
            <Social>
                {SocialModul.map((link, key) => (
                    <Sociallink key={`social-item-${key}`} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                        <Socialicon className={link.icono}></Socialicon>
                    </Sociallink>
                ))}
            </Social>
        </Wrapper>
    )
}