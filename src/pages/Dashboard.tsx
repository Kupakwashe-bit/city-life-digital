
import { FileText, Building2, Droplet, AlertCircle } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import StatCard from "@/components/ui/stat-card";
import PropertyCard from "@/components/dashboard/PropertyCard";
import BillingCard from "@/components/dashboard/BillingCard";
import ReportIssueCard from "@/components/dashboard/ReportIssueCard";

// Mock data - In a real app this would come from API
const mockBills = [
  {
    id: "bill-1",
    type: "Water Bill",
    amount: 45.50,
    dueDate: "May 15, 2023",
    status: 'pending' as const,
  },
  {
    id: "bill-2",
    type: "Property Tax",
    amount: 350.00,
    dueDate: "June 1, 2023",
    status: 'pending' as const,
  },
  {
    id: "bill-3",
    type: "Waste Collection",
    amount: 25.75,
    dueDate: "April 30, 2023",
    status: 'paid' as const,
  },
];

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back to your city services</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Properties"
          value="2"
          icon={<Building2 className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Total Billing"
          value="$423.25"
          icon={<FileText className="h-5 w-5 text-primary" />}
          trend={{ value: 12, isPositive: false }}
        />
        <StatCard
          title="Water Usage"
          value="245 gal"
          icon={<Droplet className="h-5 w-5 text-primary" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Open Reports"
          value="1"
          icon={<AlertCircle className="h-5 w-5 text-primary" />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Recent Bills</h2>
          <BillingCard bills={mockBills} />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <ReportIssueCard />
            
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">Your Properties</h2>
              <div className="space-y-4">
                <PropertyCard 
                  id="prop-1"
                  address="123 Main Street"
                  type="Residential"
                  status="active"
                  lastPayment={{
                    amount: 350.00,
                    date: "April 2, 2023"
                  }}
                />
                
                <PropertyCard 
                  id="prop-2"
                  address="45 Commerce Ave"
                  type="Commercial"
                  status="pending"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
