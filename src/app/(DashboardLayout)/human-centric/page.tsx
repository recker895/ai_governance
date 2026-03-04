"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ShieldCheck, AlertTriangle } from "lucide-react"

export default function HumanCentricDashboard(){

return(

<div className="p-6 space-y-8">

{/* ================= METRICS ================= */}

<div className="grid grid-cols-4 gap-6">

<div className="bg-gradient-to-r from-blue-200 to-blue-100 p-6 rounded-xl shadow-lg hover:scale-105 transition">

<div className="flex justify-between items-center">
<h3 className="text-sm text-gray-600">Human Oversight Systems</h3>
<Users className="text-blue-700"/>
</div>

<p className="text-3xl font-bold text-blue-700 mt-2">12</p>
<p className="text-xs text-gray-500 mt-1">
5 / 7 High-Risk Under AIREC
</p>

</div>

<div className="bg-gradient-to-r from-green-200 to-green-100 p-6 rounded-xl shadow-lg hover:scale-105 transition">

<div className="flex justify-between items-center">
<h3 className="text-sm text-gray-600">Appeals & Grievances</h3>
<ShieldCheck className="text-green-700"/>
</div>

<p className="text-3xl font-bold text-green-700 mt-2">5</p>

<p className="text-xs text-gray-500 mt-1">
4 Resolved / 1 Pending
</p>

</div>

<div className="bg-gradient-to-r from-red-200 to-red-100 p-6 rounded-xl shadow-lg hover:scale-105 transition">

<div className="flex justify-between items-center">
<h3 className="text-sm text-gray-600">High-Impact AI Systems</h3>
<AlertTriangle className="text-red-700"/>
</div>

<p className="text-3xl font-bold text-red-700 mt-2">3</p>

<p className="text-xs text-gray-500 mt-1">
Population-Scale Systems
</p>

</div>

<div className="bg-gradient-to-r from-purple-200 to-purple-100 p-6 rounded-xl shadow-lg hover:scale-105 transition">

<div className="flex justify-between items-center">
<h3 className="text-sm text-gray-600">Appeal Mechanisms</h3>
<Users className="text-purple-700"/>
</div>

<p className="text-3xl font-bold text-purple-700 mt-2">2</p>

<p className="text-xs text-gray-500 mt-1">
Human Review Channels
</p>

</div>

</div>

{/* ================= AI SYSTEM HUMAN IMPACT ================= */}

<Card className="shadow-lg">

<CardHeader>
<CardTitle>Human-Centric AI Impact Registry</CardTitle>
</CardHeader>

<CardContent>

<table className="w-full border rounded-lg overflow-hidden">

<thead className="bg-gray-100">

<tr>

<th className="p-3 border">System</th>
<th className="p-3 border">Impact Type</th>
<th className="p-3 border">Human Oversight</th>
<th className="p-3 border">Owner</th>
<th className="p-3 border">Status</th>

</tr>

</thead>

<tbody>

<tr>

<td className="p-3 border">Credit Scoring AI</td>
<td className="p-3 border">Financial Access</td>
<td className="p-3 border">Human approval required</td>
<td className="p-3 border">Finance</td>
<td className="p-3 border">Active</td>

</tr>

<tr>

<td className="p-3 border">Hiring Screening AI</td>
<td className="p-3 border">Employment Decision</td>
<td className="p-3 border">HR manual review</td>
<td className="p-3 border">HR</td>
<td className="p-3 border">Under Review</td>

</tr>

<tr>

<td className="p-3 border">Healthcare Diagnosis AI</td>
<td className="p-3 border">Medical Assistance</td>
<td className="p-3 border">Doctor verification</td>
<td className="p-3 border">Healthcare</td>
<td className="p-3 border">Active</td>

</tr>

</tbody>

</table>

</CardContent>

</Card>

{/* ================= NIST AI RMF ================= */}

<div className="grid grid-cols-4 gap-6">

<Card className="bg-blue-100 shadow">

<CardHeader>
<CardTitle>GOVERN</CardTitle>
</CardHeader>

<CardContent>
Human oversight policies and accountability
</CardContent>

</Card>

<Card className="bg-yellow-100 shadow">

<CardHeader>
<CardTitle>MAP</CardTitle>
</CardHeader>

<CardContent>
Identify human impact and risks
</CardContent>

</Card>

<Card className="bg-orange-100 shadow">

<CardHeader>
<CardTitle>MEASURE</CardTitle>
</CardHeader>

<CardContent>
Evaluate fairness, transparency, harm
</CardContent>

</Card>

<Card className="bg-green-100 shadow">

<CardHeader>
<CardTitle>MANAGE</CardTitle>
</CardHeader>

<CardContent>
Mitigate AI harms and enable appeals
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
<td className="p-3 border">
Human-centric AI principle and oversight
</td>

<td className="p-3 border">
Human impact metrics and oversight registry
</td>

</tr>

<tr>

<td className="p-3 border">NIST AI RMF</td>

<td className="p-3 border">
AI risk management lifecycle
</td>

<td className="p-3 border">
Govern → Map → Measure → Manage blocks
</td>

</tr>

<tr>

<td className="p-3 border">Unified Control Framework</td>

<td className="p-3 border">
Policy and control mapping
</td>

<td className="p-3 border">
Human-impact risk → policy → control table
</td>

</tr>

</tbody>

</table>

</CardContent>

</Card>

{/* ================= POLICY CONTROL MAPPING ================= */}

<Card className="shadow-lg">

<CardHeader>
<CardTitle>Human Impact → Policy → Control Mapping</CardTitle>
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

<tr>

<td className="p-3 border">
Automated decision without human review
</td>

<td className="p-3 border">
Human-Centric AI Governance
</td>

<td className="p-3 border">
Human-in-the-loop approval
</td>

<td className="p-3 border">
Decision logs
</td>

</tr>

<tr>

<td className="p-3 border">
Unfair algorithmic outcomes
</td>

<td className="p-3 border">
Fairness & Non-Discrimination
</td>

<td className="p-3 border">
Bias testing & audit
</td>

<td className="p-3 border">
Evaluation report
</td>

</tr>

</tbody>

</table>

</CardContent>

</Card>

</div>

)

}