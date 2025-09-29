import { Button } from './ui/button';
import { useAuth0 } from '@auth0/auth0-react';

const DesktopNav = () => {
    //TODO: write a common button for a single source of signin functionality
    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            variant="ghost"
            className="font-bold"
            onClick={async () => await loginWithRedirect()}
        >
            Login
        </Button>
    );
};

export default DesktopNav;
