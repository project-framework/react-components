import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import Layout from '../Layout';
import AutoComplete from '@/AutoComplete';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/components',
        element: <Layout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: 'auto-complete',
                element: <AutoComplete />,
            },
        ],
    },
]);
export default router;
