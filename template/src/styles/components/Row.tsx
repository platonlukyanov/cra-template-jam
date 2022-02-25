import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > button {
    margin-left: 4px;
    margin-right: 8px;
    }

    &:not(:last-child) {
    margin-bottom: 16px;
    }
`;

export default Row;
