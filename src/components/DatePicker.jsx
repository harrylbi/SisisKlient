// DatePicker.jsx
export const DatePicker = ({ 
    label, 
    name, // Tambahkan name prop
    value, 
    onChange, 
    className = '', 
    ...props 
  }) => (
    <div className={`mb-4 ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        type="date"
        name={name} // Sertakan name attribute
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
    </div>
  );
  
  export default DatePicker;