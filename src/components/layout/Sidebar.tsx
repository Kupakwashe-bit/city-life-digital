
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
  X,
  Users,
  Settings,
  BarChart,
  ClipboardList,
  Activity,
  Shield,
  LogOut,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isAdmin?: boolean;
  userName: string;
}

const Sidebar = ({ open, setOpen, isAdmin = false, userName }: SidebarProps) => {
  const { logout } = useAuth();

  const citizenNavItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Property", icon: Building2, path: "/property" },
    { name: "Billing", icon: FileText, path: "/billing" },
    { name: "Vehicles", icon: Car, path: "/vehicles" },
    { name: "Business", icon: Building, path: "/business" },
    { name: "Water & Waste", icon: Droplet, path: "/water-waste" },
    { name: "Issue Reports", icon: AlertCircle, path: "/reports" },
    { name: "Pet License", icon: Dog, path: "/pets" },
  ];

  const adminNavItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Users", icon: Users, path: "/users" },
    { name: "Approvals", icon: ClipboardList, path: "/approvals" },
    { name: "Reports", icon: Activity, path: "/reports" },
    { name: "Billing", icon: FileText, path: "/billing" },
    { name: "Analytics", icon: BarChart, path: "/analytics" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  const navItems = isAdmin ? adminNavItems : citizenNavItems;

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
          <div className="mb-6 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                {isAdmin ? (
                  <Shield className="w-5 h-5 text-primary" />
                ) : (
                  <User className="w-5 h-5 text-primary" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium">{userName}</p>
                <p className="text-xs text-gray-500">{isAdmin ? "Administrator" : "Citizen"}</p>
              </div>
            </div>
          </div>

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
          
          <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-200">
            <button
              onClick={logout}
              className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
