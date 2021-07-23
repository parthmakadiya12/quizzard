import {createGlobalStyle} from "styled-components";

export const darkTheme={
    color:{
        body:"#262c4a",
        fontPrimary:"#fdfefe",
        checkBox: "#117fec",
        title:"#8c94bd",
    }   
}

export const lightTheme={
    color:{
        body:"white",
        fontPrimary:"#1d345b",
        checkBox: "#ff5261",
        title:"#1f345a",    
    }
}

export const GlobalStyles=createGlobalStyle<{theme: any}>`
    body{
        background-color: ${({theme})=>theme.color.body};
        color:${({theme})=>theme.color.fontPrimary}
    }
`;
