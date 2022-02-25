import styled from 'styled-components';
import { verticalFloat } from '../../styles/animations';

export const Container = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${verticalFloat} infinite 3s ease-in-out;
    }
`;

export const Header = styled.header`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`;

export const Link = styled.a`
    color: rgb(112, 76, 182);
`;
