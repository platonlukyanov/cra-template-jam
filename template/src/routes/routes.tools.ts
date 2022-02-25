import { routes } from './routesList';

export function getRouteByName(name: string) {
    return routes.find(route => route.name === name);
}
