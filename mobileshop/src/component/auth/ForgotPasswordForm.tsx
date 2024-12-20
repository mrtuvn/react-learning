import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logout } from "../../features/auth/authSlice";
import { forgotPasswordAsync } from "../../features/auth/authThunks";
interface ForgotPasswordFormType {
  email: string;
}

export const ForgotPasswordForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error, success } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormType>();

  useEffect(() => {
    if (success) {
      dispatch(logout()); // Reset success state
      navigate("/login");
    }
    return () => {
      dispatch(logout());
    };
  }, [success, navigate, dispatch]);

  const onSubmit = async (data: ForgotPasswordFormType) => {
    dispatch(forgotPasswordAsync(data.email));
  };

  return (
    <div className="m-auto w-full max-w-lg space-y-10 rounded border bg-white p-8 shadow-md">
      <h2 className="mt-3 text-center text-xl tracking-tight text-gray-900">
        We'll send you a link to reset your password
      </h2>
      {error && <div className="text-sm text-red-600">{error}</div>}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div className="mb-4">
          <label
            htmlFor="forgot-email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            id="forgot-email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Email Address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
          >
            {isLoading ? "Sending..." : "Reset Password"}
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Back to{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
