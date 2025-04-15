
export const RememberMeCheckbox = () => {
  return (
    <div className="flex items-center">
      <input
        id="remember_me"
        name="remember_me"
        type="checkbox"
        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
      />
      <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
        Remember me
      </label>
    </div>
  );
};
