import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;1,300&display=swap');

* {
    text-decoration: none;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	list-style-type: none;
}
body {
    position: relative;
	overflow-x: hidden;	
    padding: 0;
    margin: 0;
    background-color: black;
    height: 100%;
}
`;

export default GlobalStyles;
