import { Link } from 'react-router';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Header = () => {
    return (
        <div className="border-b-2 border-b-orange-400 py-5">
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    className="text-2xl font-bold tracking-tight text-orange-500"
                    to="/"
                >
                    Nom Nom
                </Link>

                <div className="md:hidden">
                    <MobileNav />
                </div>

                <div className="hidden md:block">
                    <DesktopNav />
                </div>
            </div>
        </div>
    );
};

export default Header;
