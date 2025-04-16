
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Define user types with roles
export type UserRole = "user" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// Mock users for demonstration purposes
const MOCK_USERS = [
  {
    id: "1",
    email: "user@example.com",
    password: "password",
    name: "John Doe",
    role: "user" as UserRole,
  },
  {
    id: "2",
    email: "admin@example.com",
    password: "password",
    name: "Admin User",
    role: "admin" as UserRole,
  },
];

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    console.log("Login attempt:", { email, role }); // Debug log
    
    // In a real app, you would validate credentials with your backend
    // For now, we'll use our mock data - ignore role initially to check credentials
    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    console.log("Found user:", foundUser); // Debug log

    if (foundUser) {
      // Now verify if the role matches
      if (foundUser.role === role) {
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem("user", JSON.stringify(userWithoutPassword));
        
        // Show success toast
        toast({
          title: "Login successful",
          description: `Welcome back, ${userWithoutPassword.name}!`,
        });
        
        navigate("/dashboard");
        return true;
      } else {
        console.log("Role mismatch: User found but incorrect role selected"); // Debug log
        toast({
          title: "Login failed",
          description: `This account exists but is not a ${role} account.`,
          variant: "destructive",
        });
        return false;
      }
    }
    
    console.log("No matching user found"); // Debug log
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isAuthenticated = user !== null;
  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
