import { createGlobalStyle } from "styled-components";
import Paprika from "./Paprika-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: "Paprika";
        src: local("Paprika"), local('Paprika'),
        url(${Paprika}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
`;
