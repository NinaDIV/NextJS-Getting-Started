'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import Button from '../components/Button';

// Lazy load del componente UserCard
const UserCard = lazy(() => import('../components/Usercard'));

export default function ProfilePage() {
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [genderFilter, setGenderFilter] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setFilteredUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleGenderFilter = (gender: string) => {
    setGenderFilter(gender);
    if (gender === '') {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter((user) => user.gender === gender));
    }
    setCurrentPage(1);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

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

      {/* Filtros de género */}
      <div className="mb-6 flex justify-center space-x-4">
        <Button onClick={() => handleGenderFilter('')} label="Todos" color="bg-gray-500" />
        <Button onClick={() => handleGenderFilter('female')} label="Mujeres" color="bg-pink-500" />
        <Button onClick={() => handleGenderFilter('male')} label="Hombres" color="bg-blue-500" />
      </div>

      {/* Usuarios cargados con Suspense (lazy) */}
      <Suspense fallback={<p className="text-gray-500 text-sm">Cargando tarjetas de usuario...</p>}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentUsers.map((user) => (
            <UserCard
              key={user.id}
              name={`${user.firstName} ${user.lastName}`}
              email={user.email}
              image={user.image}
              gender={user.gender}
            />
          ))}
        </div>
      </Suspense>

      {/* Paginación */}
      <div className="mt-6 flex space-x-2">
        <Button
          onClick={() => paginate(currentPage - 1)}
          label="Anterior"
          color="bg-gray-400"
          disabled={currentPage === 1}
        />
        <Button
          onClick={() => paginate(currentPage + 1)}
          label="Siguiente"
          color="bg-gray-400"
          disabled={currentPage === totalPages}
        />
      </div>

      <footer className="mt-8 text-sm text-gray-500">
        <p>Hecho con ❤️ por NinaDIV</p>
      </footer>
    </div>
  );
}
