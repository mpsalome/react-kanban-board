import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        background: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.text};        
    }
    h1 {
        color: ${(props) => props.theme.titles};        
    }
`;
