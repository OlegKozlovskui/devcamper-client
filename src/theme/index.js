import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
 
  ${reset}

:root {
  /* Define Colors */
  --red-100: #f1b1a2;
  --red-500: #E05433;
  --red-600: #ce401f;
  --white: #FFFFFF;
  --grey-100: #f8f9fa;
  --grey-200: #ced4da;
  --grey-300: #6c757d;
  --grey-400: #495057;
  --black: #212529;
  --lightBlack: #343a40;
  --green: #28a745;
  
  
  /* Used on big surface background colors */
  --bg-primary: var(--red-500);


  /* Define Colors intentions */
  --primary: var(--red-500);
  --secondary: var(--black);
  --light: var(--white);
  --textColor: var(--black);


  /* Type */
  --bodyFont: 'Open Sans', sans-serif;
  --h1: 56px;
  --h2: 40px;
  --h4: 24px;
  --h5: 20px;
  --text: 16px;

  * {
    box-sizing: border-box;
  }

  body {
    font-family: var(--bodyFont);
    font-weight: 400;
    color: var(--textColor);
    background: var(--lightGrey);
    scroll-behavior: smooth;
    position: relative;
  }

  ul {
    list-style: none;
  }

  p {
    margin-bottom: 16px;
    font-size: var(--text);
  }

  h1 {
    font-size: var(--h1);
  }

  h4 {
    font-size: var(--h4);
  }

  h5 {
    font-size: var(--h5);
  }

  svg {
    display: inline-block;
  }
  
}
`;

export default GlobalStyle;
