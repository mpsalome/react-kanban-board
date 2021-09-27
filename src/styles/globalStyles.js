import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        background: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.text};        
    }
    h1 {
        color: ${(props) => props.theme.titles};        
    }
    .dragging {
        opacity: 50%;
        animation: tilting .3s infinite linear alternate;
    }
    @keyframes tilting {
        from {
            transform: rotate(-5deg);
        }
        to {
            transform: rotate(5deg);
        }
    }
`;
