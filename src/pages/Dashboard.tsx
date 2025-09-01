import React from "react";
import StatsCard from "./StatsCard";
import CommitsChart from "./CommitsChart";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard title="Total Commits" value="1,245" />
        <StatsCard title="Open PRs" value="87" />
        <StatsCard title="Issues Closed" value="342" />
      </div>
      <CommitsChart />
    </div>
  );
};

export default Dashboard;
