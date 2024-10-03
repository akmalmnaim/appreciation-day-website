// src/components/Voting.jsx
import React, { useEffect, useState } from "react";

const Voting = ({ onVoteSuccess, username }) => {
  const [isActive, setIsActive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [grade, setGrade] = useState("");
  const [classRoom, setClassRoom] = useState("");
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsExiting(true); // Start exit transition
    setTimeout(() => {
      onVoteSuccess(); // Call function to show success page
    }, 500); // Adjust to match transition duration
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className={`bg-gray-800 p-6 rounded shadow-md w-96 slide-in ${isActive ? "active" : ""} ${isExiting ? "slide-out left" : ""}`}>
        <h2 className="text-3xl mb-4 text-center text-white">Voting Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="grade" className="block mb-1 text-white">
              Jenjang
            </label>
            <select id="grade" value={grade} onChange={(e) => setGrade(e.target.value)} className="border p-2 w-full bg-input-bg-color text-input-text-color" required>
              <option value="">Pilih Jenjang</option>
              <option value="SD">SD</option>
              <option value="SMP">SMP</option>
              <option value="SMA">SMA</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="class" className="block mb-1 text-white">
              Kelas
            </label>
            <select id="class" value={classRoom} onChange={(e) => setClassRoom(e.target.value)} className="border p-2 w-full bg-input-bg-color text-input-text-color" required>
              <option value="">Pilih Kelas</option>
              <option value="Kelas 1">Kelas 1</option>
              <option value="Kelas 2">Kelas 2</option>
              <option value="Kelas 3">Kelas 3</option>
              <option value="Kelas 4">Kelas 4</option>
              <option value="Kelas 5">Kelas 5</option>
              <option value="Kelas 6">Kelas 6</option>
              <option value="Kelas 7">Kelas 7</option>
              <option value="Kelas 8">Kelas 8</option>
              <option value="Kelas 9">Kelas 9</option>
              <option value="Kelas 10">Kelas 10</option>
              <option value="Kelas 11">Kelas 11</option>
              <option value="Kelas 12">Kelas 12</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="studentName" className="block mb-1 text-white">
              Nama
            </label>
            <input type="text" id="studentName" placeholder="Masukkan Nama" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="border p-2 w-full bg-input-bg-color text-input-text-color" required />
          </div>
          <button type="submit" className="bg-button-bg-color text-button-text-color p-2 rounded w-full hover:bg-accent-color transition-colors">
            Kirim Voting
          </button>
        </form>
      </div>
    </div>
  );
};

export default Voting;
