
import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { RoleSelector } from "./RoleSelector";
import { RememberMeCheckbox } from "./RememberMeCheckbox";
import { ForgotPasswordLink } from "./ForgotPasswordLink";
import { CreateAccountLink } from "./CreateAccountLink";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("user");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoading) return; // Prevent multiple submissions
    
    setIsLoading(true);
    
    try {
      console.log("Attempting login with:", { email, password, role });
      
      // The login function handles all success/error toasts internally
      await login(email, password, role);
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: "An unexpected error occurred during login.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </Label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </Label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="••••••••"
          />
        </div>
      </div>

      <RoleSelector selectedRole={role} onRoleChange={setRole} />

      <div className="flex items-center justify-between">
        <RememberMeCheckbox />
        <ForgotPasswordLink />
      </div>

      <Button
        type="submit"
        className="w-full flex justify-center items-center gap-2"
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign in"}
        {!isLoading && <ArrowRight className="h-4 w-4" />}
      </Button>

      <CreateAccountLink />
    </form>
  );
};
