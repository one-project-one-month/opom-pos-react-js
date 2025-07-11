"use client";
import Link from "next/link";
import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignupSchema = z
  .object({
    staffId: z
      .string()
      .min(8, "Staff ID is required and must be at least 8 characters")
      .regex(/^[a-zA-Z0-9]+$/, "Staff ID must be alphanumeric"),
    password: z
      .string()
      .min(10, "Password must have at least 10 characters")
      .max(20, "Password must have at most 20 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^a-zA-Z0-9]/, "Password must contain at least one symbol"),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

type SignupInputs = z.infer<typeof SignupSchema>;

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = (data: SignupInputs) => {
    console.log("Form submitted successfully:", data);
    // Handle successful form submission here
  };

  const onError = (errors: any) => {
    console.log("Form validation errors:", errors);
  };

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className=" flex-1 p-30 m-auto">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div>
            <h1 className="text-7xl font-bold  mb-4 ">
              <span className="text-primary-300">OPOM</span>POS
            </h1>
            <p className="mb-8">Online inventory management system</p>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-extrabold">
                Registration New Account
              </h2>

              {/* Staff ID Field */}
              <div>
                <div className="flex items-center border-1 border-black rounded-md px-4 py-3">
                  <FaUser className="text-primary-300 mr-2" />
                  <input
                    {...register("staffId")}
                    type="text"
                    placeholder="staff id number"
                    className="flex-1 outline-none"
                  />
                </div>
                {errors.staffId && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.staffId.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center border rounded px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-primary-300">
                  <FaLock className="text-primary-300 mr-2" />
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                    className="flex-1 outline-none"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Password Confirmation Field */}
              <div>
                <div className="flex items-center border rounded px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-primary-300">
                  <FaLock className="text-primary-300 mr-2" />
                  <input
                    {...register("passwordConfirmation")}
                    type="password"
                    placeholder="Password Confirmation"
                    className="flex-1 outline-none"
                  />
                </div>
                {errors.passwordConfirmation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.passwordConfirmation.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-primary-300 text-white px-4 py-2 rounded"
              >
                Register Now
              </button>

              <p className="text-sm mt-4 text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/auth/Login"
                  className="text-primary-300 hover:underline cursor-pointer"
                >
                  Go to Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="flex-1/3 overflow-hidden ">
        <img
          src="/image/POSLogin.png"
          alt="Logo"
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Signup;
