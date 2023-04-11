import React from "react";
import "./Statistics.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const marks = [
    {
      id: 1,
      name: "Assignment 1",
      mark: "60",
    },
    {
      id: 2,
      name: "Assignment 2",
      mark: "59",
    },
    {
      id: 3,
      name: "Assignment 3",
      mark: "60",
    },
    {
      id: 4,
      name: "Assignment 4",
      mark: "60",
    },
    {
      id: 5,
      name: "Assignment 5",
      mark: "33",
    },
    {
      id: 6,
      name: "Assignment 6",
      mark: "45",
    },
    {
      id: 7,
      name: "Assignment 7",
      mark: "60",
    },
    {
      id: 8,
      name: "Assignment 8",
      mark: "48",
    },
  ];
  return (
    <div>
      <h1 className="font-semibold text-2xl pb-5">Statistics</h1>
      <div>
        <ResponsiveContainer width="95%" height={400}>
          <AreaChart width={1000} height={400} data={marks}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="mark" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="mark"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
