export const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md font-medium transition-colors
        ${variant === 'primary' 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );