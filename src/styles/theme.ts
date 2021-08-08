import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  color: {
    body: "#262c4a",
    cardBackGround: "#262c4a",
    fontPrimary: "#fdfefe", // white shade
    fontSecondry: "#cec3c3", // dirty white
    headerColor: "#8d95bb", // light purple
    checkBox: "#117fec", // blue
    title: "#8c94bd", // wild blue
    button: "#127eeb", //light blue
    buttonSecondry: "#4098f0", //lighter blue
    buttonFontColor: "white",
    inputColor: "#4a5171",
    inputFontColor: "white",
  },
  type: "dark",
};

export const lightTheme = {
  color: {
    body: "#ffda62",
    cardBackGround: "#ffffff",
    fontPrimary: "#1d345b",
    fontSecondry: "#1A1A1A",
    headerColor: "black",
    checkBox: "#ff5261",
    title: "#1f345a",
    button: "#6287FF",
    buttonSecondry: "#2F60FF",
    buttonFontColor: "white",
    inputColor: "white",
    inputFontColor: "#1d345b",
  },
  type: "light",
};

export const GlobalStyles = createGlobalStyle<{ theme: any }>`
    body{
        background-color: ${({ theme }) => theme.color.body};
        color:${({ theme }) => theme.color.fontPrimary}
    }
`;
