import styled from "styled-components"
import { media } from "../../assets/style/media"

export const NavbarContainer = styled.header`
    
    width: 100%;
    background-color: var(--cor-bg-principal);
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 90px;

    img {
        height: 60%;
    }

    ${media('tablet')}{
        position: fixed;
    }
`