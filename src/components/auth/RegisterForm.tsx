
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { UserRole } from "@/contexts/AuthContext";
import { RegisterFormInputs } from "./RegisterFormInputs";
import { RoleSelector } from "./RoleSelector";
import { TermsCheckbox } from "./TermsCheckbox";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user" as UserRole,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRoleChange = (selectedRole: UserRole) => {
    setFormData(prev => ({ ...prev, role: selectedRole }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Registration failed",
        description: "Passwords do not match!",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    // In a real app, this would register the user
    setTimeout(() => {
      toast({
        title: "Registration successful",
        description: "Your account has been created.",
      });
      navigate("/login");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <RegisterFormInputs formData={formData} handleChange={handleChange} />
      <RoleSelector selectedRole={formData.role} onRoleChange={handleRoleChange} />
      <TermsCheckbox />
      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
};
