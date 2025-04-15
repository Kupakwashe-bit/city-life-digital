
import { Link } from "react-router-dom";
import { 
  Home, 
  Building2, 
  FileText, 
  Car, 
  Building, 
  Droplet, 
  AlertCircle, 
  Dog,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const navItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Property", icon: Building2, path: "/property" },
    { name: "Billing", icon: FileText, path: "/billing" },
    { name: "Vehicles", icon: Car, path: "/vehicles" },
    { name: "Business", icon: Building, path: "/business" },
    { name: "Water & Waste", icon: Droplet, path: "/water-waste" },
    { name: "Issue Reports", icon: AlertCircle, path: "/reports" },
    { name: "Pet License", icon: Dog, path: "/pets" },
  ];

  return (
    <>
      {/* Overlay */}
      {open && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 shadow-lg transition-transform duration-300 ease-in-out transform",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">CityLife</span>
          </Link>
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-primary/10 hover:text-primary"
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
