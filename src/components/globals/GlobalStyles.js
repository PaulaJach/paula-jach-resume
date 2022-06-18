import { createGlobalStyle } from "styled-components";
import { setColor } from "../../styles";

const GlobalStyles = createGlobalStyle`

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
h4 {
    color: ${setColor.secondaryColor};
  }
`;

export default GlobalStyles;
