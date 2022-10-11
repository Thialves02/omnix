import styled from "styled-components"
import { media } from "../../assets/style/media"

export const OffersContainer = styled.main`
    height: calc(100vh - 130px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span:first-child {
        text-align: center;
        font-size: 22px;
        padding: 20px;
        font-weight: bold;
    }

    ${media("tablet")}{
        height: 100vh;
    }
`
export const AllOffers = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${media("desktop")}{
        flex-direction: row;
    }
`