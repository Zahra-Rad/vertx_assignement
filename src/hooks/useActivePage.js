import { useLocation } from 'react-router-dom';

export const useActivePage = () => {
    const location = useLocation();
    const path = location.pathname;

    const pageName = path.substring(1).charAt(0).toUpperCase() + path.slice(2);

    return path === '/' ? 'Dashboard' : pageName || 'Dashboard';
}; 