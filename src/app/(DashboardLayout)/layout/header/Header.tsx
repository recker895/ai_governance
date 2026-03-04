"use client";

const Header = () => {
  return (
    <header className="w-full border-b bg-background">
      <div className="flex items-center justify-between px-6 py-4">

        <div className="flex flex-col">
          <h1 className="text-lg font-semibold tracking-wide">
            AI Governance Dashboard
          </h1>
          <span className="text-xs text-muted-foreground">
            Control & Compliance Framework
          </span>
        </div>

        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
          India + NIST + UCF Integrated View
        </span>

      </div>
    </header>
  );
};

export default Header;