import styled from "styled-components"

export const ButtonContainer = styled.button`
    width: 100%;
    height:40px;   
    border-radius: 5px;
    border: none;
    background-color: var(--cor-bg-principal);
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    :disabled {
	    background-color: #787878;
        cursor: default;
    }

    &.fixed {
        position: fixed;
        z-index: 11;
        bottom: 8vh;
        right: 5vw;
        width: 150px;
    }
`