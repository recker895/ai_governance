"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";

const fairnessSystems = [
  {
    system: "Loan Approval AI",
    biasRisk: "Gender Bias",
    mitigation: "Fairness testing",
    owner: "Finance",
    status: "Active",
  },
  {
    system: "Hiring Screening AI",
    biasRisk: "Ethnicity Bias",
    mitigation: "Dataset balancing",
    owner: "HR",
    status: "Under Review",
  },
  {
    system: "Healthcare Diagnosis AI",
    biasRisk: "Population Bias",
    mitigation: "Inclusive training data",
    owner: "Healthcare",
    status: "Active",
  },
];

export default function Page() {
  return (
    <div className="p-6 space-y-8">

      {/* KPI CARDS */}

      <div className="grid grid-cols-12 gap-6">

        <Card className="col-span-3 bg-blue-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Fair AI Systems</p>
                <h2 className="text-3xl font-bold text-blue-600">3</h2>
              </div>
              <Icon icon="mdi:scale-balance" width={30} />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-green-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Bias Tests Performed</p>
                <h2 className="text-3xl font-bold text-green-600">6</h2>
              </div>
              <Icon icon="mdi:test-tube" width={30} />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-purple-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Inclusive Datasets</p>
                <h2 className="text-3xl font-bold text-purple-600">4</h2>
              </div>
              <Icon icon="mdi:account-group" width={30} />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-red-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Bias Incidents</p>
                <h2 className="text-3xl font-bold text-red-600">1</h2>
              </div>
              <Icon icon="mdi:alert" width={30} />
            </div>
          </CardContent>
        </Card>

      </div>


      {/* FAIRNESS REGISTRY */}

      <Card>
        <CardHeader>
          <CardTitle>AI Fairness & Inclusivity Registry</CardTitle>
        </CardHeader>

        <CardContent>

          <table className="w-full border">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">System</th>
                <th className="p-2 border">Bias Risk</th>
                <th className="p-2 border">Mitigation</th>
                <th className="p-2 border">Owner</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>

            <tbody>
              {fairnessSystems.map((system, i) => (
                <tr key={i}>
                  <td className="p-2 border">{system.system}</td>
                  <td className="p-2 border">{system.biasRisk}</td>
                  <td className="p-2 border">{system.mitigation}</td>
                  <td className="p-2 border">{system.owner}</td>
                  <td className="p-2 border">{system.status}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </CardContent>
      </Card>


      {/* NIST AI RMF BLOCK */}

      <div className="grid grid-cols-12 gap-6">

        <Card className="col-span-3 bg-blue-50">
          <CardContent className="p-5">
            <h3 className="font-semibold">GOVERN</h3>
            <p className="text-sm">Define fairness policies</p>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-yellow-50">
          <CardContent className="p-5">
            <h3 className="font-semibold">MAP</h3>
            <p className="text-sm">Identify bias risks</p>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-orange-50">
          <CardContent className="p-5">
            <h3 className="font-semibold">MEASURE</h3>
            <p className="text-sm">Evaluate fairness metrics</p>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-green-50">
          <CardContent className="p-5">
            <h3 className="font-semibold">MANAGE</h3>
            <p className="text-sm">Mitigate algorithmic bias</p>
          </CardContent>
        </Card>

      </div>


      {/* UCF CONTROL MAPPING */}

      <Card>
        <CardHeader>
          <CardTitle>Fairness → Policy → Control Mapping</CardTitle>
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
                <td className="p-2 border">Algorithmic bias</td>
                <td className="p-2 border">Fairness & Non-Discrimination</td>
                <td className="p-2 border">Bias testing</td>
                <td className="p-2 border">Fairness audit report</td>
              </tr>

              <tr>
                <td className="p-2 border">Unequal model performance</td>
                <td className="p-2 border">Inclusive AI governance</td>
                <td className="p-2 border">Dataset diversity validation</td>
                <td className="p-2 border">Model evaluation logs</td>
              </tr>

            </tbody>

          </table>

        </CardContent>
      </Card>

    </div>
  );
}