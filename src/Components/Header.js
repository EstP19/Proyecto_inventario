/* eslint-disable no-const-assign */
import styled from "styled-components";
import Container from './Container';

const Wrapper = styled.header`
display : flex;
background: black;
box-shadow: 0 10px 30px -10px rgba(30, 30, 30, 30 / 70%);
color: white;
`;

const Menu = styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
`;

const MenuItem = styled.a`
padding: 16px;
cursor : pointer;
color: #ccc;;

&:hover {
    background: #252526;
    color: #ccc;
}
`;

const items = [
    { name: 'Curriculum', link: '#Curriculum' },
    { name: 'Repositorio', link: '#Repositories' }
]

export function Header() {
    return (
        <Wrapper>
            <Container>
                <Menu>
                    {items.map((item, key) => (
                        <MenuItem key={`menu-item-${key}`} href={item.link}>
                            {item.name}
                        </MenuItem>
                    ))}
                </Menu>
            </Container>
        </Wrapper>
    );
}

