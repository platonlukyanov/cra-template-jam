import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { routes } from './routesList';

function AppRouter() {
    return (
        <Routes>
            {routes.map(route => {
                const Component = route.component;

                return <Route path={route.path} element={<Component/>} key={route.path}/>;
            })
            }
        </Routes>
    );
}

export default AppRouter;
