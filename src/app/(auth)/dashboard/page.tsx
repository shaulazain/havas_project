'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // Sign out the user
    await signOut({ redirect: false });

    // Clear any additional session-related storage if needed
    localStorage.removeItem('token'); // If you store tokens in localStorage

    // Redirect to the Sign-In page
    router.replace('/sign-in');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button 
        onClick={handleLogout} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
 