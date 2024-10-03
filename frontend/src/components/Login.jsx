// src/components/Login.jsx
import React, { useState, useEffect } from "react";

const Login = ({ onLogin, onTransition }) => {
  const [NIS, setNIS] = useState("");
  const [Password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State untuk pesan kesalahan

  const registeredUser = {
    NIS: "201810370311284",
    Password: "20071999",
    Name: "AkmalMnaim",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsExiting(true); // Memulai transisi keluar

    // Cek apakah NIS dan Password cocok
    if (NIS === registeredUser.NIS && Password === registeredUser.Password) {
      setTimeout(() => {
        onLogin(NIS); // Panggil fungsi login dari props
        onTransition(); // Panggil fungsi untuk transisi ke halaman voting
      }, 500); // Sesuaikan dengan waktu transisi
    } else {
      setErrorMessage("NIS atau Password salah!"); // Set pesan kesalahan
      setIsExiting(false); // Hentikan transisi keluar jika login gagal
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className={`bg-gray-800 p-6 rounded shadow-md w-96 fade-in ${isActive ? "active" : ""} ${isExiting ? "slide-out left" : ""}`}>
        <h2 className="text-white text-3xl mb-4 text-center">Login</h2>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>} {/* Tampilkan pesan kesalahan */}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="NIS" value={NIS} onChange={(e) => setNIS(e.target.value)} className="border p-2 mb-4 w-full  " required />
          <input type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} className="border p-2 mb-4 w-full  " required />
          <button type="submit" className="text-white p-2 rounded w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
