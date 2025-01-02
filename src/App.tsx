import React from 'react';
import Tabs from './components/Tabs';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Configuration du Restaurant
          </h1>
          <p className="text-lg text-gray-600">
            Gérez facilement vos menus, horaires et informations
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <Tabs />
        </div>
      </div>
      <Toaster 
        position="top-right"
        toastOptions={{
          className: 'rounded-lg shadow-md',
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}