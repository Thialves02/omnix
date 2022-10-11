import styled from "styled-components"

export const OfferContainer = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;

    span,h2 {
        z-index: 1;
        color: var(--cor-texto-card);
    }

    span,h2,img {
        transition: 1s;
    }

    span {
        position: absolute;
        bottom: -70px;
        padding: 0 10px;
        text-align: center;
    }
   
    img {
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        filter:brightness(.5)
    }

    &:hover {
        span {
            bottom: 65px;
        }

        h2 {
            margin-top: -250px;
        }

        img {
            filter:brightness(.2)
        }
    }
`