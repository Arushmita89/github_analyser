import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">AI GitHub Analyzer</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/insights" className="hover:underline">AI Insights</Link>
        <Link to="/search" className="hover:underline">Repo Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
