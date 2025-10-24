import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Oops! Page not found</h1>
      <p className="mt-4">The page you are looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary mt-6">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
