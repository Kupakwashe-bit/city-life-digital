
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const ReportIssueCard = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-600 rounded-lg shadow-sm p-5 text-white">
      <div className="flex items-start mb-4">
        <div className="p-2 bg-white/20 rounded-lg mr-4">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold text-xl">Report an Issue</h3>
          <p className="mt-1 text-white/80 text-sm">
            Report road damages, water leaks, waste issues and more
          </p>
        </div>
      </div>
      
      <Link 
        to="/reports/new" 
        className="block w-full py-2 px-4 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-center font-medium"
      >
        Submit Report
      </Link>
    </div>
  );
};

export default ReportIssueCard;
