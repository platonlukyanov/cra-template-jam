import React from 'react';

export interface Route {
    name: string
    path: string
    component: () => JSX.Element
    generateLink: (...args: string[]) => string
}
