import styled from "styled-components"
import { media } from "../../assets/style/media"

export const HomeContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 130px);

    h2 {
        margin-bottom: 35px;
        text-align: center;
    }


    ${media("tablet")}{
        height: 100vh;    
    }
`