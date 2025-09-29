import { Navigate, Route, Routes } from 'react-router';
import Layout from './layouts/Layout';
import Homepage from './pages/Homepage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Homepage />
                    </Layout>
                }
            />
            <Route path="/user-profile" element={<h1>user profile page</h1>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
