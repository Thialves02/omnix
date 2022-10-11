import styled from "styled-components"
import { media } from "../../assets/style/media"

export const OffersContainer = styled.div`
    height: 100vh;
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
`
export const Offers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${media("desktop")}{
        flex-direction: row;
    }
`