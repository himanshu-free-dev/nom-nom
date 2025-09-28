import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Welcome to Nom Nom</SheetTitle>
                    <Separator />
                    <SheetDescription className="flex">
                        <Button className="flex-1 font-bold bg-orange-500">
                            Login
                        </Button>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
