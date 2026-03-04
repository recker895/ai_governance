"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";

const monitoringSystems = [
  {
    system: "Loan Approval AI",
    monitoring: "Performance drift monitoring",
    audit: "Monthly audit",
    owner: "Finance",
    status: "Active",
  },
  {
    system: "Hiring Screening AI",
    monitoring: "Bias drift detection",
    audit: "Quarterly audit",
    owner: "HR",
    status: "Under Review",
  },
  {
    system: "Customer Support Chatbot",
    monitoring: "Response quality monitoring",
    audit: "Weekly log review",
    owner: "Customer Ops",
    status: "Active",
  },
];

export default function Page() {
  return (
    <div className="p-6 space-y-8">

      {/* KPI METRICS */}

      <div className="grid grid-cols-12 gap-6">

        <Card className="col-span-3 bg-blue-100">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p>Monitored AI Systems</p>
              <h2 className="text-3xl font-bold text-blue-600">3</h2>
            </div>
            <Icon icon="mdi:monitor-eye" width={30} />
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-green-100">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p>Audits Completed</p>
              <h2 className="text-3xl font-bold text-green-600">8</h2>
            </div>
            <Icon icon="mdi:file-check" width={30} />
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-purple-100">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p>Drift Alerts</p>
              <h2 className="text-3xl font-bold text-purple-600">2</h2>
            </div>
            <Icon icon="mdi:chart-line" width={30} />
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-red-100">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p>Compliance Issues</p>
              <h2 className="text-3xl font-bold text-red-600">1</h2>
            </div>
            <Icon icon="mdi:alert-circle" width={30} />
          </CardContent>
        </Card>

      </div>


      {/* MONITORING REGISTRY */}

      <Card>
        <CardHeader>
          <CardTitle>AI Continuous Monitoring Registry</CardTitle>
        </CardHeader>

        <CardContent>

          <table className="w-full border">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">System</th>
                <th className="p-2 border">Monitoring Mechanism</th>
                <th className="p-2 border">Audit Frequency</th>
                <th className="p-2 border">Owner</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>

            <tbody>
              {monitoringSystems.map((sys, i) => (
                <tr key={i}>
                  <td className="p-2 border">{sys.system}</td>
                  <td className="p-2 border">{sys.monitoring}</td>
                  <td className="p-2 border">{sys.audit}</td>
                  <td className="p-2 border">{sys.owner}</td>
                  <td className="p-2 border">{sys.status}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </CardContent>
      </Card>


      {/* NIST AI RMF */}

      <div className="grid grid-cols-12 gap-6">

        <Card className="col-span-3 bg-blue-50">
          <CardContent className="p-5">
            <h3 className="font-semibold">GOVERN</h3>
            <p>Define monitoring governance</p>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-yellow-50">
          <CardContent className="p-5">
            <h3 className="font-semibold">MAP</h3>
            <p>Identify operational risks</p>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-orange-50">
          <CardContent className="p-5">
            <h3 className="font-semibold">MEASURE</h3>
            <p>Track model performance</p>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-green-50">
          <CardContent className="p-5">
            <h3 className="font-semibold">MANAGE</h3>
            <p>Continuous improvement & retraining</p>
          </CardContent>
        </Card>

      </div>


      {/* CONTROL MAPPING */}

      <Card>

        <CardHeader>
          <CardTitle>Monitoring → Policy → Control Mapping</CardTitle>
        </CardHeader>

        <CardContent>

          <table className="w-full border">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Risk Scenario</th>
                <th className="p-2 border">Policy Requirement</th>
                <th className="p-2 border">Control</th>
                <th className="p-2 border">Evidence</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="p-2 border">Model performance drift</td>
                <td className="p-2 border">Continuous monitoring</td>
                <td className="p-2 border">Performance tracking</td>
                <td className="p-2 border">Monitoring logs</td>
              </tr>

              <tr>
                <td className="p-2 border">Undetected AI failures</td>
                <td className="p-2 border">Operational oversight</td>
                <td className="p-2 border">Scheduled audits</td>
                <td className="p-2 border">Audit reports</td>
              </tr>

            </tbody>

          </table>

        </CardContent>

      </Card>

    </div>
  );
}