import { keyframes } from 'styled-components';

export const verticalFloat = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0px);
    }
`;
