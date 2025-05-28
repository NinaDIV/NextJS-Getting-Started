import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, color }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg shadow-md text-white font-semibold hover:opacity-80 transition duration-300 ${color}`}
    >
      {label}
    </button>
  );
};

export default Button;
