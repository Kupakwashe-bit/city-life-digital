
import { useState } from "react";
import { Camera, MapPin, Send, Loader2 } from "lucide-react";

interface ReportIssueFormProps {
  onSubmit: (data: ReportFormData) => void;
  isLoading?: boolean;
}

interface ReportFormData {
  issueType: string;
  description: string;
  location: string;
  images?: FileList | null;
}

const ReportIssueForm = ({ onSubmit, isLoading = false }: ReportIssueFormProps) => {
  const [formData, setFormData] = useState<ReportFormData>({
    issueType: "water_leak",
    description: "",
    location: "",
    images: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, images: e.target.files }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">
          Issue Type
        </label>
        <select
          id="issueType"
          name="issueType"
          required
          value={formData.issueType}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        >
          <option value="water_leak">Water Leak</option>
          <option value="road_damage">Road Damage</option>
          <option value="waste_issue">Waste Collection Issue</option>
          <option value="streetlight">Street Light Problem</option>
          <option value="drainage">Drainage Problem</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          required
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          placeholder="Please describe the issue in detail..."
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <div className="flex">
          <input
            id="location"
            name="location"
            type="text"
            required
            value={formData.location}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            placeholder="Enter address or description of location"
          />
          <button
            type="button"
            className="px-3 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-md text-gray-600 hover:bg-gray-200"
          >
            <MapPin className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="images" className="block text-sm font-medium text-gray-700">
          Upload Images (Optional)
        </label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="images"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Camera className="w-8 h-8 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
            <input
              id="images"
              name="images"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
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
              Submitting...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <Send className="h-5 w-5 mr-2" />
              Submit Report
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default ReportIssueForm;
