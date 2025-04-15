
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  address: string;
  type: string;
  status: string;
  lastPayment?: {
    amount: number;
    date: string;
  };
}

const PropertyCard = ({ id, address, type, status, lastPayment }: PropertyCardProps) => {
  return (
    <Link to={`/property/${id}`} className="block">
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <div className="mr-3 p-2 bg-blue-100 rounded-md">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">{address}</h3>
              <p className="text-sm text-gray-500">{type}</p>
            </div>
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            status === 'active' ? 'bg-green-100 text-green-800' : 
            status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'
          }`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        
        {lastPayment && (
          <div className="border-t border-gray-100 pt-3 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Last Payment</span>
              <div className="text-right">
                <p className="font-medium">${lastPayment.amount.toFixed(2)}</p>
                <p className="text-xs text-gray-500">{lastPayment.date}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default PropertyCard;
