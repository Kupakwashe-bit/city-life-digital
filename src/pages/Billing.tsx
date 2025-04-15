
import MainLayout from "@/components/layout/MainLayout";
import { FileText, Calendar, CreditCard, Download, Filter, ArrowDownUp } from "lucide-react";
import { useState } from "react";

// Mock data - In a real app this would come from API
const mockBillingHistory = [
  {
    id: "bill-001",
    type: "Water Bill",
    amount: 45.50,
    date: "2023-04-15",
    dueDate: "2023-05-15",
    status: "pending",
  },
  {
    id: "bill-002",
    type: "Property Tax",
    amount: 350.00,
    date: "2023-04-01",
    dueDate: "2023-06-01",
    status: "pending",
  },
  {
    id: "bill-003",
    type: "Waste Collection",
    amount: 25.75,
    date: "2023-03-30",
    dueDate: "2023-04-30",
    status: "paid",
  },
  {
    id: "bill-004",
    type: "Water Bill",
    amount: 42.25,
    date: "2023-03-15",
    dueDate: "2023-04-15",
    status: "paid",
  },
  {
    id: "bill-005",
    type: "Business License",
    amount: 150.00,
    date: "2023-02-10",
    dueDate: "2023-03-10",
    status: "paid",
  },
];

const Billing = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredBills = filter === "all" 
    ? mockBillingHistory
    : mockBillingHistory.filter(bill => bill.status === filter);

  const totalDue = mockBillingHistory
    .filter(bill => bill.status === "pending")
    .reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Billing & Payments</h1>
        <p className="text-gray-500 mt-1">Manage your bills and make payments</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-primary-50 rounded-lg mr-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Outstanding Balance</h2>
              <p className="text-3xl font-bold mt-1">${totalDue.toFixed(2)}</p>
            </div>
          </div>
          
          <button className="w-full mt-6 py-2 px-4 bg-primary text-white font-medium rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Pay All Bills
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-50 rounded-lg mr-4">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Next Due Date</h2>
              <p className="text-lg font-medium mt-1">April 30, 2023</p>
              <p className="text-sm text-gray-500">Waste Collection</p>
            </div>
          </div>
          
          <button className="w-full mt-6 py-2 px-4 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            View Details
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-50 rounded-lg mr-4">
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Payment Methods</h2>
              <p className="text-sm text-gray-500 mt-1">Manage your payment options</p>
            </div>
          </div>
          
          <button className="w-full mt-6 py-2 px-4 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Add Payment Method
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Billing History</h2>
          
          <div className="flex items-center space-x-2">
            <div className="relative">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none pl-3 pr-8 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-primary focus:border-primary"
              >
                <option value="all">All Bills</option>
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
              </select>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>
            
            <button className="p-1.5 rounded-md border border-gray-300 hover:bg-gray-50">
              <Download className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    Bill Type
                    <ArrowDownUp className="ml-1 h-3 w-3" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    Amount
                    <ArrowDownUp className="ml-1 h-3 w-3" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    Date
                    <ArrowDownUp className="ml-1 h-3 w-3" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    Due Date
                    <ArrowDownUp className="ml-1 h-3 w-3" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBills.map((bill) => (
                <tr key={bill.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{bill.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">${bill.amount.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{new Date(bill.date).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{new Date(bill.dueDate).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${bill.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                    >
                      {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {bill.status === 'pending' ? (
                      <button className="text-primary hover:text-primary-600">Pay Now</button>
                    ) : (
                      <button className="text-gray-600 hover:text-gray-900">View</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredBills.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No bills found
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Billing;
