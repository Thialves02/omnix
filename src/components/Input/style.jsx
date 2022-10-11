import styled from "styled-components"

export const InputContainer = styled.div`
    position:relative;
    height:70px ;
    display:block;
    width: 200px;

    
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px white inset;
    }

    input {
        position:absolute;
        padding:0 10px ;
        width:100%;
        top:0;
        left:0; 
        height:37px;
        outline:none;
        border-radius:5px;
        border: 2px solid #97bec2;
        transition: .3s;
        z-index:2;
        background-color:transparent;

        &:focus ~ label{
            color:var(--cor-bg-principal) ;
        }

        &:focus ~ label, &:valid ~ label{
            top:-.6rem;
            left:.5rem;
            font-size:17px;
            background-color:var(--cor-texto-card) ;
            font-weight:bold;
            z-index:2
        }

        &:focus{
            border: 2px solid var(--cor-bg-principal);
        }
    }

    

    label {
        font-size:20px;
        position:absolute;
        left:1rem ;
        top:.3rem ;
        padding:0 .25rem;
        z-index:1;
        color:#97bec2 ;
        transition: .3s;
    }

    span {
        display:block ;
        margin-top:40px ;
        color:red;
    }
`