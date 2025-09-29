import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';
import { Link } from 'react-router';

const MobileNavLinks = () => {
    const { logout, user } = useAuth0();

    return (
        <div>
            <p className="font-semibold text-xl">{user?.email}</p>

            <Link to={'/user-profile'}>Profile</Link>

            <Button
                className="flex-1 font-bold bg-orange-500"
                onClick={() => logout()}
            >
                Logout
            </Button>
        </div>
    );
};

export default MobileNavLinks;
