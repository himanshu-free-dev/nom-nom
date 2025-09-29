import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Link } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';

const UsernameMenu = () => {
    const { logout, user } = useAuth0();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-semibold">
                {user?.email}
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>My Restaurant</DropdownMenuItem>
                <Link to={'/user-profile'}>Profile</Link>
                <DropdownMenuItem>
                    <Button onClick={() => logout()}>Logout</Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UsernameMenu;
