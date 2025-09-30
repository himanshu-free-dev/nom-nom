import { useCreateMyUser } from '@/api/MyUserApi';
import { useAuth0 } from '@auth0/auth0-react';
import { Loader } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

const AuthCallbackPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth0();
    const { createUser } = useCreateMyUser();

    const hasCreatedUser = useRef(false);

    useEffect(() => {
        // create user in mongodb if the auth0 redirected user is not already present
        // hold calling createUser api on every re-render with useRef
        // navigate to homepage after the user is created in mongodb
        if (user?.sub && user?.email && !hasCreatedUser.current) {
            createUser({ auth0Id: user.sub, email: user.email });
            hasCreatedUser.current = true;
        }
        navigate('/');
    }, [createUser, navigate, user]);

    return (
        <div className="text-center text-orange-400 flex gap-2 items-center">
            <Loader className="spin-in" />
            Signing you in...
        </div>
    );
};

export default AuthCallbackPage;
