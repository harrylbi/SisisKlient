// Input.jsx
export const Input = ({ 
    label, 
    type = 'text', 
    value, 
    onChange, 
    options, // Tambahkan prop options untuk select
    className = '', 
    ...props 
  }) => (
    <div className={`mb-4 ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      
      {type === 'select' ? (
        <select
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          {...props}
        >
          {props.children || (
            <>
              <option value="">Pilih</option>
              {options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </>
          )}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          {...props}
        />
      )}
    </div>
  );