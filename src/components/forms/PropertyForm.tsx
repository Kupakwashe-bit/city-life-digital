
import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

interface PropertyFormProps {
  onSubmit: (data: PropertyFormData) => void;
  isLoading?: boolean;
}

interface PropertyFormData {
  address: string;
  city: string;
  postalCode: string;
  propertyType: string;
  ownership: string;
  size: string;
}

const PropertyForm = ({ onSubmit, isLoading = false }: PropertyFormProps) => {
  const [formData, setFormData] = useState<PropertyFormData>({
    address: "",
    city: "",
    postalCode: "",
    propertyType: "residential",
    ownership: "owned",
    size: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Street Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
            Postal Code
          </label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            required
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="size" className="block text-sm font-medium text-gray-700">
            Property Size (sq.ft)
          </label>
          <input
            id="size"
            name="size"
            type="number"
            required
            value={formData.size}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            required
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
            <option value="agricultural">Agricultural</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="ownership" className="block text-sm font-medium text-gray-700">
            Ownership Status
          </label>
          <select
            id="ownership"
            name="ownership"
            required
            value={formData.ownership}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          >
            <option value="owned">Owned</option>
            <option value="rented">Rented</option>
            <option value="leased">Leased</option>
          </select>
        </div>
      </div>
      
      <div className="pt-3">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-primary text-white font-medium rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Processing...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <Check className="h-5 w-5 mr-2" />
              Register Property
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;
