import asyncComponent from 'lib/asyncComponent';

export const ConnectionPage = asyncComponent(() => import('./ConnectionPage'));
export const SchemaPage = asyncComponent(() => import('./SchemaPage'));
export const ModelPage = asyncComponent(() => import('./ModelPage'));
