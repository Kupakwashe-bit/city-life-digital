
import MainLayout from "@/components/layout/MainLayout";
import PropertyForm from "@/components/forms/PropertyForm";
import { Link } from "react-router-dom";
import { Building2, Plus } from "lucide-react";

const Property = () => {
  const handlePropertySubmit = (data: any) => {
    // In a real app, this would make an API call
    console.log("Property submitted:", data);
    alert("Property registration submitted successfully!");
  };

  return (
    <MainLayout>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Property Management</h1>
          <p className="text-gray-500 mt-1">Register and manage your properties</p>
        </div>
        
        <Link 
          to="/property/new" 
          className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Property
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">Register New Property</h2>
            <PropertyForm onSubmit={handlePropertySubmit} />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold mb-4">Property Registration Guide</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-50 text-primary text-sm font-medium mr-3">1</span>
                <span>Fill out the registration form with accurate details</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-50 text-primary text-sm font-medium mr-3">2</span>
                <span>Submit the form for municipal review</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-50 text-primary text-sm font-medium mr-3">3</span>
                <span>Receive confirmation within 2-3 business days</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-50 text-primary text-sm font-medium mr-3">4</span>
                <span>Your property will be linked to billing services</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex items-center mb-4">
              <Building2 className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-lg font-semibold">Why Register?</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Registering your property allows you to manage all related municipal services in one place,
              including water billing, property tax, and waste collection. It also ensures you receive
              important notifications and updates about your property.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Property;
