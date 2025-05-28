import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  color: string;
  disabled?: boolean; // Agregamos la propiedad disabled, que es opcional
}

const Button: React.FC<ButtonProps> = ({ onClick, label, color, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg shadow-md text-white font-semibold hover:opacity-80 transition duration-300 ${color} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled} // Agregamos el atributo disabled al botón
    >
      {label}
    </button>
  );
};

export default Button;
