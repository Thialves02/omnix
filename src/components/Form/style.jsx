import styled from "styled-components"
import { media } from "../../assets/style/media"

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center ;
    justify-content: center;
    background-color: var(--cor-texto-card);
    width: 300px;
    border-radius: 10px;
    padding: 50px 0;

    h2 {
        margin-bottom: 25px;
        font-size: 24px;
        text-align: center;
    }

    ${media('tablet')}{
        width:400px
    }
`