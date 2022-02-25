import Home from '../features/home/Home';
import type { Route } from './routes.models';

export const routes: Route[] = [
    {
        name: 'home',
        path: '/',
        component: Home,
        generateLink() {
            return this.path;
        },
    },
];
