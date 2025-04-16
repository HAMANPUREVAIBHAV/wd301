import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const userData = localStorage.getItem('userData') 
    ? JSON.parse(localStorage.getItem('userData') as string) 
    : null;

  const handleLogout = () => {
    localStorage.removeItem('userData'); // clear user data
    // Add any other session cleanup if needed
    localStorage.removeItem('authToken'); // clear auth token
    navigate('/signin'); // redirect to signin page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <h2>{userData?.name}</h2>
      <h2>{userData?.email}</h2>
      <button
        id="logout-link"
        onClick={handleLogout}
        className="mt-6 text-blue-500 underline hover:text-blue-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
