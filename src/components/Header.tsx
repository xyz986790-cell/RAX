import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/omdic-logo.png";
import LoginModal from "./LoginModal";
import CartIcon from "./CartIcon";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context in real app
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" }, 
    { name: "The Philosophy", path: "/philosophy" },
    { name: "Services", path: "/services" },
    { name: "Books, Articles & Posts", path: "/books" },
    { name: "Buy Now", path: "/buy" },
    { name: "Contact", path: "/contact" }
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add logout logic here
  };

  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="OMDIC Logo" 
              className="h-12 w-auto mr-4"
            />
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                asChild
                className={`font-medium text-base transition-colors ${
                  location.pathname === item.path 
                    ? "text-primary" 
                    : "text-primary hover:text-primary/80"
                }`}
              >
                <Link to={item.path}>{item.name}</Link>
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* <CartIcon /> */}
            
            {/* {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders">
                      <User className="mr-2 h-4 w-4" />
                      Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )
             : (
              <LoginModal />
            )} */}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon"
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    asChild
                    className={`font-medium text-lg justify-start ${
                      location.pathname === item.path 
                        ? "text-primary" 
                        : "text-primary hover:text-primary/80"
                    }`}
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </Button>
                ))}
                
                {/* <div className="pt-4 border-t">
                  <CartIcon />
                  {!isLoggedIn && <LoginModal />}
                </div> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;