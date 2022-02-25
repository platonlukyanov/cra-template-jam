import React from 'react';
import ReactDOM from 'react-dom';
import Home from './features/home/Home';
import { store } from './app/store';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            <GlobalStyles />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

