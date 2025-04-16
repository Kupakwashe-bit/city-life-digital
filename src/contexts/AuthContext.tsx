
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
    console.log("Login attempt with:", { email, password, role });
    
    // Find user by email and password first
    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    console.log("Found user:", foundUser);

    if (!foundUser) {
      toast({
        title: "Login failed",
        description: "Invalid email or password.",
        variant: "destructive",
      });
      return false;
    }

    // Check if user role matches the selected role
    if (foundUser.role !== role) {
      toast({
        title: "Login failed",
        description: `This account exists but is not a ${role} account.`,
        variant: "destructive",
      });
      return false;
    }

    // Successful login
    const { password: pwd, ...userWithoutPassword } = foundUser;
    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));
    
    toast({
      title: "Login successful",
      description: `Welcome back, ${userWithoutPassword.name}!`,
    });
    
    navigate("/dashboard");
    return true;
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
