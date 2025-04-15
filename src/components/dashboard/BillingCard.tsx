
import { FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BillItemProps {
  id: string;
  type: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
}

interface BillingCardProps {
  bills: BillItemProps[];
}

const BillingCard = ({ bills }: BillingCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="p-5 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Recent Bills</h3>
          <Link to="/billing" className="text-primary text-sm font-medium">View All</Link>
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {bills.length > 0 ? (
          bills.map((bill) => (
            <Link key={bill.id} to={`/billing/${bill.id}`} className="flex items-center justify-between p-4 hover:bg-gray-50">
              <div className="flex items-center">
                <div className="mr-3 p-2 bg-blue-100 rounded-md">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{bill.type}</p>
                  <p className="text-sm text-gray-500">Due: {bill.dueDate}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-right mr-4">
                  <p className="font-medium">${bill.amount.toFixed(2)}</p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    bill.status === 'paid' ? 'bg-green-100 text-green-800' : 
                    bill.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </Link>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            No bills available
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingCard;
