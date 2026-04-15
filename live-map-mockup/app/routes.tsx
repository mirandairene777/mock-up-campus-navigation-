import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { MapPage } from './pages/MapPage';
import { Programs } from './pages/Programs';
import { Directory } from './pages/Directory';
import { About } from './pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'map',
        Component: MapPage,
      },
      {
        path: 'programs',
        Component: Programs,
      },
      {
        path: 'directory',
        Component: Directory,
      },
      {
        path: 'about',
        Component: About,
      },
    ],
  },
]);
