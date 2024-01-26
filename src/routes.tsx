import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Finances } from './pages/Finances';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/finanças',
        element: <Finances />,
    },
]);

export default router;
