"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  humanCentricData,
  governanceMetrics,
  riskDistribution,
} from "@/data/humanCentricData";

const SalesProfit = () => {
  // ===============================
  // Safe Calculated Metrics
  // ===============================

  const totalHighRisk =
    humanCentricData.oversightSystems.totalHighRiskSystems || 0;

  const highRiskUnderAIREC =
    humanCentricData.oversightSystems.highRiskUnderAIREC || 0;

  const totalAppeals = humanCentricData.appeals.total || 0;
  const resolvedAppeals = humanCentricData.appeals.resolved || 0;

  const oversightCompliance =
    totalHighRisk > 0
      ? (highRiskUnderAIREC / totalHighRisk) * 100
      : 0;

  const appealsResolutionRate =
    totalAppeals > 0
      ? (resolvedAppeals / totalAppeals) * 100
      : 0;

  const classificationRate =
    governanceMetrics.totalAISystems > 0
      ? (governanceMetrics.classifiedSystems /
          governanceMetrics.totalAISystems) *
        100
      : 0;

  const auditRate =
    governanceMetrics.totalAISystems > 0
      ? (governanceMetrics.systemsUnderAudit /
          governanceMetrics.totalAISystems) *
        100
      : 0;

  const controlCoverage =
    governanceMetrics.totalControls > 0
      ? (governanceMetrics.implementedControls /
          governanceMetrics.totalControls) *
        100
      : 0;

  return (
    <div className="rounded-3xl shadow-md bg-background p-6 w-full break-words">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h5 className="card-title">Human Impact Overview</h5>

        <Select defaultValue="this-week">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="april-2024">April 2024</SelectItem>
            <SelectItem value="may-2024">May 2024</SelectItem>
            <SelectItem value="june-2024">June 2024</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* ================= KPI GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 min-h-[260px]">

        {/* Oversight */}
        <div className="border rounded-2xl p-6 text-center">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Human Oversight Systems
          </p>

          <h3 className="text-4xl font-bold mt-4">
            {humanCentricData.oversightSystems.totalRequiringReview}
          </h3>

          <p className="text-sm text-muted-foreground mt-2">
            {highRiskUnderAIREC} / {totalHighRisk} High-Risk Under AIREC
          </p>

          <span className="mt-4 inline-block px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
            India → Human-Centric | NIST → GOVERN
          </span>

          <span className="mt-2 inline-block px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
            UCF → Governance & Risk Oversight
          </span>
        </div>

        {/* Appeals */}
        <div className="border rounded-2xl p-6 text-center">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Appeals & Grievances
          </p>

          <h3 className="text-4xl font-bold mt-4">
            {totalAppeals}
          </h3>

          <p className="text-sm text-muted-foreground mt-2">
            {resolvedAppeals} Resolved /{" "}
            {humanCentricData.appeals.pending} Pending
          </p>

          <span className="mt-4 inline-block px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
            India → Appeal Mechanism | NIST → MANAGE
          </span>

          <span className="mt-2 inline-block px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
            UCF → Incident & Remediation Control
          </span>
        </div>

        {/* High Impact */}
        <div className="border rounded-2xl p-6 text-center">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            High-Impact AI Systems
          </p>

          <h3 className="text-4xl font-bold mt-4">
            {humanCentricData.highImpactSystems.total}
          </h3>

          <p className="text-sm text-muted-foreground mt-2">
            Population-Scale / Consequential Systems
          </p>

          <span className="mt-4 inline-block px-3 py-1 text-xs rounded-full bg-red-100 text-red-700">
            India → Risk Proportionality | NIST → MAP
          </span>

          <span className="mt-2 inline-block px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
            UCF → Risk Classification & Monitoring
          </span>
        </div>
      </div>

      {/* ================= Compliance Section ================= */}
      <div className="mt-10 rounded-2xl border bg-background p-6">
        <h6 className="text-sm font-semibold mb-6">
          Human-Centric Compliance Breakdown
        </h6>

        <div className="space-y-6">

          {/* Oversight Compliance */}
          <div>
            <div className="flex justify-between text-sm">
              <span>High-Risk Systems Under AIREC</span>
              <span>{oversightCompliance.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-muted h-2 rounded-full mt-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${oversightCompliance}%` }}
              />
            </div>
          </div>

          {/* Appeals Resolution */}
          <div>
            <div className="flex justify-between text-sm">
              <span>Appeals Resolution Rate</span>
              <span>{appealsResolutionRate.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-muted h-2 rounded-full mt-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${appealsResolutionRate}%` }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ================= Governance Metrics ================= */}
      <div className="mt-10 rounded-2xl border bg-background p-6">
        <h6 className="text-sm font-semibold mb-6">
          Governance Metrics Panel
        </h6>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-xs text-muted-foreground">Total AI Systems</p>
            <p className="text-2xl font-bold">
              {governanceMetrics.totalAISystems}
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">% Classified</p>
            <p className="text-2xl font-bold">
              {classificationRate.toFixed(0)}%
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">% Under Audit</p>
            <p className="text-2xl font-bold">
              {auditRate.toFixed(0)}%
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Control Coverage</p>
            <p className="text-2xl font-bold">
              {controlCoverage.toFixed(0)}%
            </p>
          </div>
        </div>
      </div>

      {/* ================= Risk Heat Overview ================= */}
      <div className="mt-10 rounded-2xl border bg-background p-6">
        <h6 className="text-sm font-semibold mb-6">
          Risk Heat Overview (NIST MAP + UCF)
        </h6>

        <div className="grid grid-cols-3 gap-6 text-center">

          <div className="p-4 rounded-xl bg-red-50 border">
            <p className="text-xs text-muted-foreground">High Risk</p>
            <p className="text-3xl font-bold text-red-600">
              {riskDistribution.high}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-yellow-50 border">
            <p className="text-xs text-muted-foreground">Moderate Risk</p>
            <p className="text-3xl font-bold text-yellow-600">
              {riskDistribution.moderate}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-green-50 border">
            <p className="text-xs text-muted-foreground">Low Risk</p>
            <p className="text-3xl font-bold text-green-600">
              {riskDistribution.low}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SalesProfit;