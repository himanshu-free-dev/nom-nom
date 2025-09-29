import { Button } from './ui/button';
import { useAuth0 } from '@auth0/auth0-react';
import UsernameMenu from './UsernameMenu';

const DesktopNav = () => {
    //TODO: write a common button for a single source of signin functionality
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? (
                <UsernameMenu />
            ) : (
                <Button
                    variant="ghost"
                    className="font-bold"
                    onClick={async () => await loginWithRedirect()}
                >
                    Login
                </Button>
            )}
        </span>
    );
};

export default DesktopNav;
