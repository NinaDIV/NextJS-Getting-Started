'use client';  // Agrega esta línea al inicio del archivo

import { useState, useEffect } from 'react';
import Button from '../components/Button'; // Importar el componente Button
import UserCard from '../components/Usercard'; // Importar el componente UserCard

export default function ProfilePage() {
  const [users, setUsers] = useState<any[]>([]); // Almacenamos los usuarios
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]); // Almacenamos los usuarios filtrados
  const [loading, setLoading] = useState(true);
  const [genderFilter, setGenderFilter] = useState<string>(''); // Filtro por género

  useEffect(() => {
    // Obtener usuarios de la API de DummyJSON
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setFilteredUsers(data.users); // Al principio mostramos todos los usuarios
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Función para manejar el cambio de filtro de género
  const handleGenderFilter = (gender: string) => {
    setGenderFilter(gender);
    if (gender === '') {
      setFilteredUsers(users); // Mostrar todos si no hay filtro
    } else {
      setFilteredUsers(users.filter((user) => user.gender === gender));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <p className="text-lg text-gray-700">Cargando usuarios...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8">Lista de Usuarios</h1>

      {/* Filtros de Categoría */}
      <div className="mb-6 flex justify-center space-x-4">
        <Button
          onClick={() => handleGenderFilter('')}
          label="Todos"
          color="bg-gray-500"
        />
        <Button
          onClick={() => handleGenderFilter('female')}
          label="Mujeres"
          color="bg-pink-500"
        />
        <Button
          onClick={() => handleGenderFilter('male')}
          label="Hombres"
          color="bg-blue-500"
        />
      </div>

      {/* Muestra los usuarios filtrados */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            name={`${user.firstName} ${user.lastName}`}
            email={user.email}
            image={user.image}
            gender={user.gender}
          />
        ))}
      </div>

      <footer className="mt-8 text-sm text-gray-500">
        <p>Hecho con ❤️ por NinaDIV</p>
      </footer>
    </div>
  );
}
