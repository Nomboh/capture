import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background: #1b1b1b
    }

    button{
        font-size: 1.1.rem;
        font-weight: bold;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        border: 3px solid #23d997;
        transition: all .5s ease;
        &:hover{
            background: #23d997;
            color: white
        }
    }

    h2{
        font-weight: lighter;
        font-size: 4rem
    }

    span{
        color: #23d997;
    }

    p{
        padding: 2rem 0rem;
        font-size: 1.4rem;
        line-height: 150%;
        color: #ccc;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
    }

    a{
        font-size: 1.1.rem
    }
`;

export default GlobalStyles;
