import { Navigate, Route, Routes } from 'react-router';
import Layout from './layouts/Layout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout>home page</Layout>} />
            <Route path="/user-profile" element={<h1>user profile page</h1>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
