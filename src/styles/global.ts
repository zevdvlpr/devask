import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    
    box-sizing: boder-box;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  } 
  
  body {              
    background: ${({ theme }) => theme.background};
    
    -webkit-font-smoothing: antialiased;
  }
        
  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    
    color: ${({ theme }) => theme.white};
  }
  
  h1, h2, h3, h4, h5, h5, strong {
    font-weight: 700;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  [disabled] {
    opacity: 0.6;
    
    cursor: not-allowed;
  }
`;
