import React from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Total Promoters", value: 1234 },
  { label: "Conversion Rate", value: 23.5, suffix: "%" },
  { label: "Revenue Generated", value: 892345, prefix: "$" },
  { label: "Active Campaigns", value: 3 },
];

const Counter = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-3xl font-bold text-blue-600">
            <CountUp
              end={stat.value}
              duration={2}
              separator="," 
              suffix={stat.suffix || ""}
              prefix={stat.prefix || ""}
            />
          </h3>
          <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;