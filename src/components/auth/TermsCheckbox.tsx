
export const TermsCheckbox = () => {
  return (
    <div className="flex items-center">
      <input
        id="terms"
        name="terms"
        type="checkbox"
        required
        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
      />
      <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
        I agree to the <a href="#" className="text-primary hover:text-primary-600">Terms of Service</a> and <a href="#" className="text-primary hover:text-primary-600">Privacy Policy</a>
      </label>
    </div>
  );
};
