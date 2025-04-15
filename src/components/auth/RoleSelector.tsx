
import { Shield } from "lucide-react";
import { UserRole } from "@/contexts/AuthContext";

interface RoleSelectorProps {
  selectedRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export const RoleSelector = ({ selectedRole, onRoleChange }: RoleSelectorProps) => {
  return (
    <div>
      <label htmlFor="role" className="block text-sm font-medium text-gray-700">
        Account type
      </label>
      <div className="mt-2 grid grid-cols-2 gap-3">
        <div
          className={`flex items-center justify-center px-3 py-2 border ${
            selectedRole === "user"
              ? "border-primary bg-primary/10 text-primary"
              : "border-gray-300 text-gray-700"
          } rounded-md cursor-pointer hover:bg-gray-50`}
          onClick={() => onRoleChange("user")}
        >
          <input
            type="radio"
            name="role"
            value="user"
            checked={selectedRole === "user"}
            onChange={() => onRoleChange("user")}
            className="sr-only"
          />
          <span className="ml-2">Citizen</span>
        </div>
        <div
          className={`flex items-center justify-center px-3 py-2 border ${
            selectedRole === "admin"
              ? "border-primary bg-primary/10 text-primary"
              : "border-gray-300 text-gray-700"
          } rounded-md cursor-pointer hover:bg-gray-50`}
          onClick={() => onRoleChange("admin")}
        >
          <input
            type="radio"
            name="role"
            value="admin"
            checked={selectedRole === "admin"}
            onChange={() => onRoleChange("admin")}
            className="sr-only"
          />
          <Shield className="h-4 w-4 mr-2" />
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
};
