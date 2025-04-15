
import MainLayout from "@/components/layout/MainLayout";
import ReportIssueForm from "@/components/forms/ReportIssueForm";
import { AlertCircle, Clock, CheckCircle, X } from "lucide-react";

// Mock data - In a real app this would come from API
const mockReports = [
  {
    id: "report-1",
    type: "water_leak",
    description: "Water leak from main pipe on street corner",
    location: "Corner of Main St and Oak Ave",
    status: "in_progress",
    date: "2023-04-05",
    lastUpdate: "2023-04-06",
  },
  {
    id: "report-2",
    type: "road_damage",
    description: "Large pothole in the middle of the street",
    location: "123 Cedar Street",
    status: "pending",
    date: "2023-04-10",
    lastUpdate: null,
  },
  {
    id: "report-3",
    type: "waste_issue",
    description: "Garbage not collected for 2 weeks",
    location: "45 Elm Street",
    status: "resolved",
    date: "2023-03-25",
    lastUpdate: "2023-03-28",
  },
];

const Reports = () => {
  const handleReportSubmit = (data: any) => {
    // In a real app, this would make an API call
    console.log("Report submitted:", data);
    alert("Issue report submitted successfully!");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="mr-1 h-3 w-3" />
            Pending
          </span>
        );
      case "in_progress":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Clock className="mr-1 h-3 w-3" />
            In Progress
          </span>
        );
      case "resolved":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="mr-1 h-3 w-3" />
            Resolved
          </span>
        );
      default:
        return null;
    }
  };

  const getIssueTypeLabel = (type: string) => {
    switch (type) {
      case "water_leak":
        return "Water Leak";
      case "road_damage":
        return "Road Damage";
      case "waste_issue":
        return "Waste Issue";
      case "streetlight":
        return "Street Light";
      case "drainage":
        return "Drainage Problem";
      default:
        return "Other";
    }
  };

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Issue Reports</h1>
        <p className="text-gray-500 mt-1">Report and track issues in your city</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-lg font-semibold">Report a New Issue</h2>
            </div>
            <ReportIssueForm onSubmit={handleReportSubmit} />
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold mb-4">Your Recent Reports</h2>
            
            {mockReports.length > 0 ? (
              <div className="space-y-4">
                {mockReports.map((report) => (
                  <div key={report.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{getIssueTypeLabel(report.type)}</h3>
                        <p className="text-sm text-gray-500 mt-1">{report.location}</p>
                      </div>
                      {getStatusBadge(report.status)}
                    </div>
                    
                    <p className="text-sm my-3">{report.description}</p>
                    
                    <div className="flex justify-between items-center text-xs text-gray-500 mt-2 pt-2 border-t border-gray-100">
                      <span>Reported: {new Date(report.date).toLocaleDateString()}</span>
                      {report.lastUpdate && (
                        <span>Last update: {new Date(report.lastUpdate).toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>You haven't submitted any issue reports yet.</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold mb-4">Reporting Guidelines</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-50 text-primary text-sm font-medium mr-3">1</span>
                <span>Provide a clear description of the issue</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-50 text-primary text-sm font-medium mr-3">2</span>
                <span>Include the exact location or address</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-50 text-primary text-sm font-medium mr-3">3</span>
                <span>Add photos if possible to help our team</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-50 text-primary text-sm font-medium mr-3">4</span>
                <span>Track the status of your report online</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-primary rounded-lg shadow-md p-6 text-white">
            <h3 className="font-semibold text-lg mb-3">Emergency?</h3>
            <p className="text-white/90 mb-4">
              For urgent matters requiring immediate attention, please contact emergency services directly.
            </p>
            <div className="bg-white/20 rounded-lg p-3 text-center font-bold">
              Emergency: 911
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reports;
