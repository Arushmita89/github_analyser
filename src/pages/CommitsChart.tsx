import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Mon", commits: 12 },
  { date: "Tue", commits: 18 },
  { date: "Wed", commits: 25 },
  { date: "Thu", commits: 20 },
  { date: "Fri", commits: 30 },
  { date: "Sat", commits: 22 },
  { date: "Sun", commits: 15 },
];

const CommitsChart: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Commits This Week</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="commits" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CommitsChart;
