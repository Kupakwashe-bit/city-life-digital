
import { Bell, User, Menu, LogOut, Shield } from "lucide-react";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

interface TopNavProps {
  openSidebar: () => void;
  userName: string;
  userRole: UserRole;
}

const TopNav = ({ openSidebar, userName, userRole }: TopNavProps) => {
  const { logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center">
        <button 
          className="md:hidden mr-4 p-2 rounded-md hover:bg-gray-100"
          onClick={openSidebar}
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold md:hidden">CityLife</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="h-8 rounded-full bg-primary/20 flex items-center justify-center px-3">
            {userRole === "admin" ? (
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-primary mr-1" />
                <span className="text-xs font-medium text-primary">Admin</span>
              </div>
            ) : (
              <div className="flex items-center">
                <User className="w-4 h-4 text-primary mr-1" />
                <span className="text-xs font-medium text-primary">Citizen</span>
              </div>
            )}
          </div>
          <span className="hidden md:inline-block text-sm font-medium">{userName}</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={logout}
            className="text-gray-600"
          >
            <LogOut className="h-4 w-4" />
            <span className="sr-only md:not-sr-only md:ml-2">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
