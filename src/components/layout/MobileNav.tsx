
import { Link } from "react-router-dom";
import { Home, Building2, FileText, AlertCircle, User, Settings, Users, Activity } from "lucide-react";

interface MobileNavProps {
  isAdmin?: boolean;
}

const MobileNav = ({ isAdmin = false }: MobileNavProps) => {
  const citizenNavItems = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "Property", icon: Building2, path: "/property" },
    { name: "Billing", icon: FileText, path: "/billing" },
    { name: "Reports", icon: AlertCircle, path: "/reports" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  const adminNavItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Users", icon: Users, path: "/users" },
    { name: "Reports", icon: Activity, path: "/reports" },
    { name: "Settings", icon: Settings, path: "/settings" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  const navItems = isAdmin ? adminNavItems : citizenNavItems;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex flex-col items-center py-2 px-3 text-xs font-medium text-gray-600 hover:text-primary"
          >
            <item.icon className="h-6 w-6 mb-1" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
