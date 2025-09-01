import React from "react";
import Dashboard from "./components/Dashboard";
import RepoSearch from "./components/RepoSearch";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">AI GitHub Analyzer</h1>
      <RepoSearch />
      <Dashboard />
    </div>
  );
}

export default App;
