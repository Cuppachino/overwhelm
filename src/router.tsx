import { ReactLocation } from '@tanstack/react-location';
import { ModifiedRoute } from '@/types/types.router';

export const location = new ReactLocation();

export const routes: ModifiedRoute[] = [
  {
    label: 'home',
    path: '/',
    element: () => import('@/pages/Home').then((module) => <module.default />),
  },
  {
    label: 'about',
    path: 'about',
    element: () => import('@/pages/About').then((module) => <module.default />),
  },
  {
    label: 'projects',
    path: 'projects',
    element: () => import('@/pages/Projects').then((module) => <module.default />),
  },
];
