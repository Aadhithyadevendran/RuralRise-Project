import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { username, email, password, name };
    console.log("Sending user data:", user);

    if (!username || !email || !password || !name) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Signup failed");
        setSuccess("");
      } else {
        setSuccess("Signup successful!");
        setError("");
        setUsername("");
        setEmail("");
        setName("");
        setPassword("");
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setSuccess("");
      console.error("Signup Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">
          Sign Up
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 bg-gray-50 text-gray-800 placeholder-gray-400 text-lg transition-all duration-200"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 bg-gray-50 text-gray-800 placeholder-gray-400 text-lg transition-all duration-200"
          />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 bg-gray-50 text-gray-800 placeholder-gray-400 text-lg transition-all duration-200"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 bg-gray-50 text-gray-800 placeholder-gray-400 text-lg transition-all duration-200"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold text-lg transition-all duration-200 mt-4"
          >
            Sign Up
          </button>
        </form>
        {error && (
          <p className="text-red-600 text-sm text-center mt-3 font-medium">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-600 text-sm text-center mt-3 font-medium">
            {success}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
