"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, FileText, BookOpen, Users } from "lucide-react"

export default function TransparencyDashboard() {

const transparencySystems = [
{
system: "Loan Approval AI",
model: "Gradient Boosting",
method: "SHAP Explainability",
owner: "Finance",
status: "Active",
},
{
system: "Hiring Screening AI",
model: "Neural Network",
method: "LIME Explanation",
owner: "HR",
status: "Under Review",
},
{
system: "Customer Support Chatbot",
model: "LLM",
method: "Prompt Transparency",
owner: "Customer Ops",
status: "Active",
},
]

return (

<div className="p-6 w-full space-y-6">

{/* ---------------- METRIC CARDS ---------------- */}

<div className="grid grid-cols-12 gap-6">

<Card className="col-span-3 bg-gradient-to-r from-blue-200 to-blue-100 shadow-lg hover:scale-105 transition">

<CardHeader className="flex flex-row items-center justify-between">

<CardTitle>Explainable Models</CardTitle>

<Eye className="text-blue-600"/>

</CardHeader>

<CardContent>

<h2 className="text-3xl font-bold text-blue-700">3</h2>

</CardContent>

</Card>


<Card className="col-span-3 bg-gradient-to-r from-green-200 to-green-100 shadow-lg hover:scale-105 transition">

<CardHeader className="flex flex-row items-center justify-between">

<CardTitle>Decision Logs</CardTitle>

<FileText className="text-green-600"/>

</CardHeader>

<CardContent>

<h2 className="text-3xl font-bold text-green-700">5</h2>

</CardContent>

</Card>


<Card className="col-span-3 bg-gradient-to-r from-purple-200 to-purple-100 shadow-lg hover:scale-105 transition">

<CardHeader className="flex flex-row items-center justify-between">

<CardTitle>Model Documentation</CardTitle>

<BookOpen className="text-purple-600"/>

</CardHeader>

<CardContent>

<h2 className="text-3xl font-bold text-purple-700">4</h2>

</CardContent>

</Card>


<Card className="col-span-3 bg-gradient-to-r from-orange-200 to-orange-100 shadow-lg hover:scale-105 transition">

<CardHeader className="flex flex-row items-center justify-between">

<CardTitle>User Disclosure</CardTitle>

<Users className="text-orange-600"/>

</CardHeader>

<CardContent>

<h2 className="text-3xl font-bold text-orange-700">2</h2>

</CardContent>

</Card>

</div>

{/* ---------------- REGISTRY ---------------- */}

<Card className="shadow-lg">

<CardHeader>

<CardTitle>AI Transparency Registry</CardTitle>

</CardHeader>

<CardContent>

<table className="w-full border rounded-lg overflow-hidden">

<thead className="bg-gray-100">

<tr>

<th className="p-2 border">System</th>

<th className="p-2 border">Model Type</th>

<th className="p-2 border">Explainability Method</th>

<th className="p-2 border">Owner</th>

<th className="p-2 border">Status</th>

</tr>

</thead>

<tbody>

{transparencySystems.map((system,i)=>(

<tr key={i} className="hover:bg-gray-50">

<td className="p-2 border">{system.system}</td>

<td className="p-2 border">{system.model}</td>

<td className="p-2 border">{system.method}</td>

<td className="p-2 border">{system.owner}</td>

<td className="p-2 border">{system.status}</td>

</tr>

))}

</tbody>

</table>

</CardContent>

</Card>

{/* ---------------- NIST RMF ---------------- */}

<div className="grid grid-cols-12 gap-6">

<Card className="col-span-3 bg-blue-100 shadow-md">

<CardHeader>

<CardTitle>GOVERN</CardTitle>

</CardHeader>

<CardContent>

Transparency policies and accountability

</CardContent>

</Card>


<Card className="col-span-3 bg-yellow-100 shadow-md">

<CardHeader>

<CardTitle>MAP</CardTitle>

</CardHeader>

<CardContent>

Identify explainability risks

</CardContent>

</Card>


<Card className="col-span-3 bg-orange-100 shadow-md">

<CardHeader>

<CardTitle>MEASURE</CardTitle>

</CardHeader>

<CardContent>

Evaluate model interpretability

</CardContent>

</Card>


<Card className="col-span-3 bg-green-100 shadow-md">

<CardHeader>

<CardTitle>MANAGE</CardTitle>

</CardHeader>

<CardContent>

Improve transparency mechanisms

</CardContent>

</Card>

</div>

{/* ---------------- CONTROL MAPPING ---------------- */}

<Card className="shadow-lg">

<CardHeader>

<CardTitle>Transparency → Policy → Control Mapping</CardTitle>

</CardHeader>

<CardContent>

<table className="w-full border rounded-lg overflow-hidden">

<thead className="bg-gray-100">

<tr>

<th className="p-2 border">Risk Scenario</th>

<th className="p-2 border">Policy Requirement</th>

<th className="p-2 border">Control</th>

<th className="p-2 border">Evidence</th>

</tr>

</thead>

<tbody>

<tr className="hover:bg-gray-50">

<td className="p-2 border">Opaque model decisions</td>

<td className="p-2 border">Transparency & Explainability</td>

<td className="p-2 border">Explainability tools (SHAP/LIME)</td>

<td className="p-2 border">Model interpretation report</td>

</tr>

<tr className="hover:bg-gray-50">

<td className="p-2 border">Hidden algorithmic bias</td>

<td className="p-2 border">Fairness & Accountability</td>

<td className="p-2 border">Bias detection testing</td>

<td className="p-2 border">Bias audit report</td>

</tr>

</tbody>

</table>

</CardContent>

</Card>

</div>

)
}