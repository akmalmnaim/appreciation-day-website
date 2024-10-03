// src/components/Success.jsx
import React, { useEffect, useState } from "react";

const Success = ({ Name, onBackToLogin }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-container flex items-center justify-center h-screen">
      <div className={`bg-gray-800 p-6 rounded shadow-md w-96 slide-in ${isActive ? "active" : ""}`}>
        <h2 className="text-3xl mb-4 text-center text-white">Voting Sukses!</h2>
        <p className="text-center text-white">Terima kasih, {Name}. Voting Anda telah diterima.</p>
        <button onClick={onBackToLogin} className="mt-4 bg-button-bg-color text-button-text-color p-2 rounded w-full hover:bg-accent-color transition-colors">
          Kembali ke Login
        </button>
      </div>
    </div>
  );
};

export default Success;
