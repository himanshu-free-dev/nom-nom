import { Navigate, Route, Routes } from 'react-router';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>home page</h1>} />
            <Route path="/user-profile" element={<h1>user profile page</h1>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
