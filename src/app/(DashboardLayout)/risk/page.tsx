"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ShieldCheck, Activity, Ban } from "lucide-react"

const systems = [
{
name: "Credit Scoring AI",
risk: "High Risk",
impact: "Financial access decision",
owner: "Finance",
status: "Approved",
},
{
name: "Hiring Screening AI",
risk: "High Risk",
impact: "Employment decision",
owner: "HR",
status: "Under Review",
},
{
name: "Customer Support Chatbot",
risk: "Low Risk",
impact: "General assistance",
owner: "Customer Ops",
status: "Active",
},
]

const policyMapping = [
{
risk: "Bias in hiring AI",
policy: "Fairness & Non-Discrimination",
control: "Bias Testing Evaluation",
evidence: "Evaluation Report",
},
{
risk: "Data privacy leakage",
policy: "Privacy by Design",
control: "Data Access Control",
evidence: "Audit Logs",
},
]

export default function RiskDashboard() {

const highRisk = systems.filter((s) => s.risk === "High Risk").length
const mediumRisk = systems.filter((s) => s.risk === "Medium Risk").length
const lowRisk = systems.filter((s) => s.risk === "Low Risk").length

return (

<div className="p-6 space-y-8">

{/* ================= METRIC CARDS ================= */}

<div className="grid grid-cols-4 gap-6">

<div className="bg-gradient-to-r from-red-200 to-red-100 rounded-xl p-6 shadow-lg hover:scale-105 transition">
<div className="flex justify-between items-center">
<h3 className="text-sm text-gray-600">High Risk AI</h3>
<AlertTriangle className="text-red-600"/>
</div>
<p className="text-3xl font-bold text-red-700 mt-2">{highRisk}</p>
</div>

<div className="bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-xl p-6 shadow-lg hover:scale-105 transition">
<div className="flex justify-between items-center">
<h3 className="text-sm text-gray-600">Medium Risk AI</h3>
<Activity className="text-yellow-600"/>
</div>
<p className="text-3xl font-bold text-yellow-700 mt-2">{mediumRisk}</p>
</div>

<div className="bg-gradient-to-r from-green-200 to-green-100 rounded-xl p-6 shadow-lg hover:scale-105 transition">
<div className="flex justify-between items-center">
<h3 className="text-sm text-gray-600">Low Risk AI</h3>
<ShieldCheck className="text-green-600"/>
</div>
<p className="text-3xl font-bold text-green-700 mt-2">{lowRisk}</p>
</div>

<div className="bg-gradient-to-r from-gray-200 to-gray-100 rounded-xl p-6 shadow-lg hover:scale-105 transition">
<div className="flex justify-between items-center">
<h3 className="text-sm text-gray-600">Prohibited AI</h3>
<Ban className="text-gray-700"/>
</div>
<p className="text-3xl font-bold text-red-600 mt-2">0</p>
</div>

</div>

{/* ================= AI SYSTEM INVENTORY ================= */}

<Card className="shadow-lg">

<CardHeader>
<CardTitle>AI Risk Classification</CardTitle>
</CardHeader>

<CardContent>

<table className="w-full border rounded-lg overflow-hidden">

<thead className="bg-gray-100">

<tr>
<th className="p-3 border">System</th>
<th className="p-3 border">Risk Category</th>
<th className="p-3 border">Impact</th>
<th className="p-3 border">Owner</th>
<th className="p-3 border">Status</th>
</tr>

</thead>

<tbody>

{systems.map((system,i)=>(
<tr key={i} className="hover:bg-gray-50">

<td className="p-3 border">{system.name}</td>
<td className="p-3 border">{system.risk}</td>
<td className="p-3 border">{system.impact}</td>
<td className="p-3 border">{system.owner}</td>
<td className="p-3 border">{system.status}</td>

</tr>
))}

</tbody>

</table>

</CardContent>

</Card>

{/* ================= NIST AI RMF ================= */}

<div className="grid grid-cols-4 gap-6">

<Card className="bg-blue-100 shadow-md">
<CardHeader>
<CardTitle>GOVERN</CardTitle>
</CardHeader>
<CardContent>
Policies, oversight, accountability
</CardContent>
</Card>

<Card className="bg-yellow-100 shadow-md">
<CardHeader>
<CardTitle>MAP</CardTitle>
</CardHeader>
<CardContent>
Identify risks and context
</CardContent>
</Card>

<Card className="bg-orange-100 shadow-md">
<CardHeader>
<CardTitle>MEASURE</CardTitle>
</CardHeader>
<CardContent>
Evaluate bias, security, safety
</CardContent>
</Card>

<Card className="bg-green-100 shadow-md">
<CardHeader>
<CardTitle>MANAGE</CardTitle>
</CardHeader>
<CardContent>
Mitigate and monitor risks
</CardContent>
</Card>

</div>

{/* ================= FRAMEWORK INTEGRATION ================= */}

<Card className="shadow-lg">

<CardHeader>
<CardTitle>Framework Integration</CardTitle>
</CardHeader>

<CardContent>

<table className="w-full border rounded-lg overflow-hidden">

<thead className="bg-gray-100">

<tr>
<th className="p-3 border">Framework</th>
<th className="p-3 border">Purpose</th>
<th className="p-3 border">Dashboard Implementation</th>
</tr>

</thead>

<tbody>

<tr>
<td className="p-3 border">India AI Governance Framework</td>
<td className="p-3 border">Risk classification and governance principles</td>
<td className="p-3 border">High/Medium/Low risk classification cards</td>
</tr>

<tr>
<td className="p-3 border">NIST AI Risk Management Framework</td>
<td className="p-3 border">Risk management lifecycle</td>
<td className="p-3 border">Govern → Map → Measure → Manage blocks</td>
</tr>

<tr>
<td className="p-3 border">Unified Control Framework</td>
<td className="p-3 border">Policy and control mapping</td>
<td className="p-3 border">Risk → Policy → Control mapping table</td>
</tr>

</tbody>

</table>

</CardContent>

</Card>

{/* ================= PLAYBOOK WORKFLOW ================= */}

<Card className="shadow-lg">

<CardHeader>
<CardTitle>AI Governance Playbook Workflow</CardTitle>
</CardHeader>

<CardContent>

<ol className="list-decimal pl-6 space-y-2">

<li>Identify AI systems deployed within the organization.</li>
<li>Classify each system into risk categories.</li>
<li>Evaluate risk using the NIST AI RMF lifecycle.</li>
<li>Apply governance policies and technical controls.</li>
<li>Maintain evidence and audit documentation.</li>

</ol>

</CardContent>

</Card>

{/* ================= POLICY CONTROL MAPPING ================= */}

<Card className="shadow-lg">

<CardHeader>
<CardTitle>Risk → Policy → Control Mapping</CardTitle>
</CardHeader>

<CardContent>

<table className="w-full border rounded-lg overflow-hidden">

<thead className="bg-gray-100">

<tr>
<th className="p-3 border">Risk Scenario</th>
<th className="p-3 border">Policy Requirement</th>
<th className="p-3 border">Control</th>
<th className="p-3 border">Evidence</th>
</tr>

</thead>

<tbody>

{policyMapping.map((item,i)=>(
<tr key={i} className="hover:bg-gray-50">

<td className="p-3 border">{item.risk}</td>
<td className="p-3 border">{item.policy}</td>
<td className="p-3 border">{item.control}</td>
<td className="p-3 border">{item.evidence}</td>

</tr>
))}

</tbody>

</table>

</CardContent>

</Card>

{/* ================= INSIGHTS ================= */}

<Card className="shadow-lg">

<CardHeader>
<CardTitle>Insights</CardTitle>
</CardHeader>

<CardContent>

<p>
The dashboard indicates that most AI systems fall under the
<strong> High Risk category</strong>. These systems influence financial
and employment decisions and therefore require strong governance,
human oversight, and regulatory compliance.
</p>

</CardContent>

</Card>

</div>

)
}