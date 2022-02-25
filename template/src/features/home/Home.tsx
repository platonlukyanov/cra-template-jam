/* eslint-disable react/jsx-key */
import React from 'react';
import logo from './logo.svg';
import { Counter } from '../counter/Counter';
import * as C from './Home.styles';

function Home() {
    return (
        <C.Container>
            <C.Header>
                <C.Logo src={logo} alt="logo" />
                <Counter />
                <p>
          Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <span>
                    <span>Learn </span>
                    <C.Link
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
            React
                    </C.Link>
                    <span>, </span>
                    <C.Link
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
            Redux
                    </C.Link>
                    <span>, </span>
                    <C.Link
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
            Redux Toolkit
                    </C.Link>
          ,<span> and </span>
                    <C.Link
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
            React Redux
                    </C.Link>
                </span>
            </C.Header>
        </C.Container>
    );
}

export default Home;
