
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Shield, User } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated, directAccess } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [navigate, isAuthenticated]);

  const handleAccess = (role: UserRole) => {
    directAccess(role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to CityLife Digital</h1>
          <p className="text-xl text-gray-600 mb-8">Choose your access type</p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => handleAccess("user")}
            className="w-full h-16 text-lg flex items-center justify-center gap-3"
            variant="outline"
          >
            <User className="h-6 w-6" />
            Enter as Citizen
          </Button>

          <Button
            onClick={() => handleAccess("admin")}
            className="w-full h-16 text-lg flex items-center justify-center gap-3"
            variant="outline"
          >
            <Shield className="h-6 w-6" />
            Enter as Administrator
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

