import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import or from "../assets/or.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Handles form state and validation
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        data
      );
      if (response.status === 200) {
        navigate("/"); // Redirects to home on successful login
        alert("Login successful!");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl font-bold mb-2">Welcome Back to BetaHouse!</h1>
        <p className="text-gray-600 font-medium text-lg mb-5 ">
          Let's get started by filling out the information below
        </p>
        
        {/* Email field */}
        <div>
          <label htmlFor="email" className="custom-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="custom-input"
            {...register("email", {
              required: "Email is required",  // Custom message if the field is empty
              pattern: {
                value: /^\S+@\S+$/i,         // Regular expression for email validation
                message: "Invalid email address", // Custom error message for invalid email
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Password field */}
        <div>
          <label htmlFor="password" className="custom-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your password"
            className="custom-input"
            {...register("password", {
              required: "Password is required",    // Custom message if the field is empty
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",  // Minimum length validation
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        {/* Remember Me checkbox */}
        <div className="flex items-center justify-between my-6">
          <div className="flex gap-1.5 items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-[20px] w-[20px] rounded-sm bg-green-500"
              {...register("remember")}
            />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <p className="text-sm text-red-500">Forgot Password</p>
        </div>

        {/* Submit button */}
        <button type="submit" className="custom-button">
          Sign In
        </button>

        {/* Or separator and Google login button */}
        <img src={or} alt="or" className="block mx-auto my-4" />
        <button className="flex items-center justify-center gap-2 w-full h-[64px] border-2 border-black rounded-2xl text-xl font-normal ">
          <FcGoogle size={22} /> Continue with Google
        </button>

        {/* Link to Sign Up page */}
        <p className="text-center my-5 text-gray-400 text-xl">
          New User?{" "}
          <Link className="text-[#3D9970]" to="/register">
            Sign Up
          </Link>{" "}
        </p>
      </form>
    </AuthWrapper>
  );
};

export default Login;
