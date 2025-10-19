import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import { MdOutlineMail, MdPassword } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const queryClient = useQueryClient();

  const {
    mutate: loginMutation,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: async ({ username, password }) => {
      try {
        const res = await fetch("https://ruralrise-project.onrender.com/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
          {/* Logo */}
          <div className="logo-container" style={{ textAlign: "center" }}>
            <img
              src={logo}
              alt="Logo"
  className="w-52 h-17 object-contain mx-auto "
            />
          </div>

          {/* Heading */}
          <h1 className="login-header">Login</h1>

          {/* Inputs */}
          <label className="input-field">
            <MdOutlineMail />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
              value={formData.username}
            />
          </label>

          <label className="input-field">
            <MdPassword />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </label>

          {/* Submit Button */}
          <button className="login-button" type="submit">
            {isPending ? "Loading..." : "Login"}
          </button>

          {/* Error */}
          {isError && <p className="error-message">{error.message}</p>}
        </form>

        {/* Signup Link */}
        <div className="signup-container">
          <p>Don't have an account?</p>
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
