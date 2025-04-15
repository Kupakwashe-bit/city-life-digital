
import { Bell, User, Menu } from "lucide-react";

interface TopNavProps {
  openSidebar: () => void;
}

const TopNav = ({ openSidebar }: TopNavProps) => {
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
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <span className="hidden md:inline-block text-sm font-medium">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
