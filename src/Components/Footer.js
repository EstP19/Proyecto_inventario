import styled from "styled-components";
import Container from "./Container";

const Wrapper = styled.footer`
display : flex;
position: relative;
padding: 48px 0 24px; 
background: black;
box-shadow: 0 10px 30px -10px rgba(30, 30, 30, 30 / 70%);
color: white;
`;
const CopyRight = styled.div`
    text-align: center;
`;

export function Footer (){
    const year = new Date().getFullYear();
    return (
        <Wrapper>
            <Container>
                <CopyRight>
                    Derechos de autor &copy; {year} Todos los derechos reservados
                </CopyRight>
            </Container>
        </Wrapper>
    )
}

