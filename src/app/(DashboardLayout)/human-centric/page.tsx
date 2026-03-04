"use client";

import SalesProfit from "../../components/dashboard/SalesProfit";

export default function Page() {
  return (
    <div className="p-6 w-full">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <SalesProfit />
        </div>
      </div>
    </div>
  );
}