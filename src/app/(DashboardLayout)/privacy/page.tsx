"use client"

import { ShieldCheck, Database, Clock, AlertTriangle } from "lucide-react"

export default function PrivacyPage() {

const systems = [
{
system: "Healthcare Diagnosis AI",
data: "Sensitive Health Data",
control: "Consent + Encryption",
owner: "Healthcare Dept",
status: "Active"
},
{
system: "Hiring Screening AI",
data: "Personal Information",
control: "Data Minimization",
owner: "HR",
status: "Under Review"
},
{
system: "Customer Support Chatbot",
data: "User Queries",
control: "Anonymization",
owner: "Customer Ops",
status: "Active"
}
]

const mapping = [
{
risk: "Personal data exposure",
policy: "Privacy by Design",
control: "Access Control + Encryption",
evidence: "Security Logs"
},
{
risk: "Unauthorized data usage",
policy: "Purpose Limitation",
control: "Data Governance Policy",
evidence: "Compliance Report"
}
]

return (

<div className="p-6 space-y-8">

{/* ================= METRIC CARDS ================= */}

<div className="grid grid-cols-4 gap-6">

<div className="bg-gradient-to-r from-blue-200 to-blue-100 rounded-xl p-6 shadow-lg hover:scale-105 transition">

<div className="flex justify-between items-center">

<h3 className="text-sm text-gray-600">Consent Mechanisms</h3>

<ShieldCheck className="text-blue-600"/>

</div>

<p className="text-3xl font-bold mt-2 text-blue-700">3</p>

</div>


<div className="bg-gradient-to-r from-green-200 to-green-100 rounded-xl p-6 shadow-lg hover:scale-105 transition">

<div className="flex justify-between items-center">

<h3 className="text-sm text-gray-600">Data Minimization</h3>

<Database className="text-green-600"/>

</div>

<p className="text-3xl font-bold mt-2 text-green-700">2</p>

</div>


<div className="bg-gradient-to-r from-purple-200 to-purple-100 rounded-xl p-6 shadow-lg hover:scale-105 transition">

<div className="flex justify-between items-center">

<h3 className="text-sm text-gray-600">Retention Compliance</h3>

<Clock className="text-purple-600"/>

</div>

<p className="text-3xl font-bold mt-2 text-purple-700">2</p>

</div>


<div className="bg-gradient-to-r from-red-200 to-red-100 rounded-xl p-6 shadow-lg hover:scale-105 transition">

<div className="flex justify-between items-center">

<h3 className="text-sm text-gray-600">Privacy Incidents</h3>

<AlertTriangle className="text-red-600"/>

</div>

<p className="text-3xl font-bold mt-2 text-red-600">0</p>

</div>

</div>

{/* ================= PRIVACY GOVERNANCE TABLE ================= */}

<div className="bg-white rounded-xl p-6 shadow-lg">

<h2 className="text-lg font-semibold mb-4">
AI Data Privacy Governance
</h2>

<table className="w-full text-sm border rounded-lg overflow-hidden">

<thead className="bg-gray-100 border-b">

<tr className="text-left">
<th className="py-3 px-3">System</th>
<th className="px-3">Data Type</th>
<th className="px-3">Privacy Control</th>
<th className="px-3">Owner</th>
<th className="px-3">Status</th>
</tr>

</thead>

<tbody>

{systems.map((s,i)=>(
<tr key={i} className="border-b hover:bg-gray-50">

<td className="py-3 px-3">{s.system}</td>
<td className="px-3">{s.data}</td>
<td className="px-3">{s.control}</td>
<td className="px-3">{s.owner}</td>
<td className="px-3">{s.status}</td>

</tr>
))}

</tbody>

</table>

</div>


{/* ================= NIST AI RMF ================= */}

<div className="grid grid-cols-4 gap-6">

<div className="bg-blue-100 rounded-xl p-6 shadow-md">

<h3 className="font-semibold text-blue-700">GOVERN</h3>

<p className="text-sm text-gray-600 mt-2">
Privacy policies and accountability
</p>

</div>


<div className="bg-yellow-100 rounded-xl p-6 shadow-md">

<h3 className="font-semibold text-yellow-700">MAP</h3>

<p className="text-sm text-gray-600 mt-2">
Identify data flows and privacy risks
</p>

</div>


<div className="bg-orange-100 rounded-xl p-6 shadow-md">

<h3 className="font-semibold text-orange-700">MEASURE</h3>

<p className="text-sm text-gray-600 mt-2">
Evaluate privacy impact and compliance
</p>

</div>


<div className="bg-green-100 rounded-xl p-6 shadow-md">

<h3 className="font-semibold text-green-700">MANAGE</h3>

<p className="text-sm text-gray-600 mt-2">
Mitigate privacy risks and monitor
</p>

</div>

</div>


{/* ================= POLICY CONTROL MAPPING ================= */}

<div className="bg-white rounded-xl p-6 shadow-lg">

<h2 className="text-lg font-semibold mb-4">
Privacy → Policy → Control Mapping
</h2>

<table className="w-full text-sm border rounded-lg overflow-hidden">

<thead className="bg-gray-100 border-b">

<tr className="text-left">
<th className="py-3 px-3">Risk Scenario</th>
<th className="px-3">Policy Requirement</th>
<th className="px-3">Control</th>
<th className="px-3">Evidence</th>
</tr>

</thead>

<tbody>

{mapping.map((m,i)=>(
<tr key={i} className="border-b hover:bg-gray-50">

<td className="py-3 px-3">{m.risk}</td>
<td className="px-3">{m.policy}</td>
<td className="px-3">{m.control}</td>
<td className="px-3">{m.evidence}</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)
}