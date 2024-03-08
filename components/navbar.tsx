"use client";
import { useState } from "react";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState<String>("Overview");
  const handleItemClick = (itemName: String) => {
    setSelectedItem(itemName);
  };
  return (
    <div>
      <div className="flex justify-between text-sm border-b-2 border-gray-300 z-0">
        <div
          className={`cursor-pointer z-10 ${
            selectedItem === "Overview"
              ? "text-blue-800 border-b-2 border-blue-800 font-semibold"
              : "text-gray-700"
          }`}
          onClick={() => handleItemClick("Overview")}
        >
          Overview
        </div>
        <div
          className={`cursor-pointer z-10 ${
            selectedItem === "Fundamentals"
              ? "text-blue-800 border-b-2 border-blue-800 font-semibold"
              : "text-gray-700"
          }`}
          onClick={() => handleItemClick("Fundamentals")}
        >
          Fundamentals
        </div>
        <div
          className={`cursor-pointer z-10 ${
            selectedItem === "News Insights"
              ? "text-blue-800 border-b-2 border-blue-800 font-semibold"
              : "text-gray-700"
          }`}
          onClick={() => handleItemClick("News Insights")}
        >
          News Insights
        </div>
        <div
          className={`cursor-pointer z-10 ${
            selectedItem === "Sentiments"
              ? "text-blue-800 border-b-2 border-blue-800 font-semibold"
              : "text-gray-700"
          }`}
          onClick={() => handleItemClick("Sentiments")}
        >
          Sentiments
        </div>
        <div
          className={`cursor-pointer z-10 ${
            selectedItem === "Team"
              ? "text-blue-800 border-b-2 border-blue-800 font-semibold"
              : "text-gray-700"
          }`}
          onClick={() => handleItemClick("Team")}
        >
          Team
        </div>
        <div
          className={`cursor-pointer z-10 ${
            selectedItem === "Technicals"
              ? "text-blue-800 border-b-2 border-blue-800 font-semibold"
              : "text-gray-700"
          }`}
          onClick={() => handleItemClick("Technicals")}
        >
          Technicals
        </div>
        <div
          className={`cursor-pointer z-10 ${
            selectedItem === "Tokenomics"
              ? "text-blue-800 border-b-2 border-blue-800 font-semibold"
              : "text-gray-700"
          }`}
          onClick={() => handleItemClick("Tokenomics")}
        >
          Tokenomics
        </div>
      </div>
    </div>
  );
};

export default Navbar;
