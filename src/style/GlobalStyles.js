import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    } 
    * {
        box-sizing: border-box;
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 18px;
        color: #ffffff;
        background-color: #5549E4;
    }
    #root,
    html,
    body {
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyle;
