"use client";

const Topbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 border-b bg-background">
      
      {/* Left Side */}
      <div className="text-lg font-semibold tracking-wide">
        AI Governance Dashboard
      </div>

      {/* Right Side */}
      <div className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
        India + NIST + UCF Integrated View
      </div>

    </div>
  );
};

export default Topbar;