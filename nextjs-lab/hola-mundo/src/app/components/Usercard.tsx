import React from 'react';
import styles from './UserCard.module.css';

interface UserCardProps {
  name: string;
  email: string;
  image: string;
  gender: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, image, gender }) => {
  return (
    <div className={`${styles.card} bg-white rounded-xl shadow-md p-4`}>
      <img src={image} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl font-semibold text-center mt-4">{name}</h2>
      <p className="text-gray-600 text-center">{email}</p>
      <p className={`text-center text-sm mt-2 ${gender === 'female' ? 'text-pink-500' : 'text-blue-500'}`}>
        {gender === 'female' ? '👩‍🦰 Mujer' : '👨‍🦱 Hombre'}
      </p>
    </div>
  );
};

export default UserCard;
