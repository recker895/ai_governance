"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";

export default function SecurityDashboard() {

const securitySystems = [

{
system:"Loan Approval AI",
control:"Model Integrity Check",
protection:"Digital Signatures",
owner:"Finance Department",
status:"Active"
},

{
system:"Healthcare Diagnosis AI",
control:"Encrypted Data Processing",
protection:"AES Encryption",
owner:"Healthcare Dept",
status:"Active"
},

{
system:"Customer Support Chatbot",
control:"Access Monitoring",
protection:"Role Based Access",
owner:"Customer Operations",
status:"Under Review"
}

]

return(

<div className="p-6 w-full">

<div className="grid grid-cols-12 gap-6">

{/* ================= SECURITY METRICS ================= */}

<div className="col-span-3">

<Card className="bg-gradient-to-r from-blue-100 to-blue-200 hover:scale-105 transition shadow-lg">

<CardHeader className="flex flex-row items-center justify-between">

<CardTitle className="text-blue-900">
Secure AI Systems
</CardTitle>

<Icon icon="mdi:shield-check" width="28" className="text-blue-700"/>

</CardHeader>

<CardContent>
<h2 className="text-4xl font-bold text-blue-700">3</h2>
</CardContent>

</Card>

</div>

<div className="col-span-3">

<Card className="bg-gradient-to-r from-green-100 to-green-200 hover:scale-105 transition shadow-lg">

<CardHeader className="flex flex-row items-center justify-between">

<CardTitle className="text-green-900">
Security Audits
</CardTitle>

<Icon icon="mdi:clipboard-check-outline" width="28" className="text-green-700"/>

</CardHeader>

<CardContent>
<h2 className="text-4xl font-bold text-green-700">5</h2>
</CardContent>

</Card>

</div>

<div className="col-span-3">

<Card className="bg-gradient-to-r from-purple-100 to-purple-200 hover:scale-105 transition shadow-lg">

<CardHeader className="flex flex-row items-center justify-between">

<CardTitle className="text-purple-900">
Encrypted Models
</CardTitle>

<Icon icon="mdi:lock-outline" width="28" className="text-purple-700"/>

</CardHeader>

<CardContent>
<h2 className="text-4xl font-bold text-purple-700">2</h2>
</CardContent>

</Card>

</div>

<div className="col-span-3">

<Card className="bg-gradient-to-r from-red-100 to-red-200 hover:scale-105 transition shadow-lg">

<CardHeader className="flex flex-row items-center justify-between">

<CardTitle className="text-red-900">
Security Incidents
</CardTitle>

<Icon icon="mdi:alert-outline" width="28" className="text-red-700"/>

</CardHeader>

<CardContent>
<h2 className="text-4xl font-bold text-red-700">1</h2>
</CardContent>

</Card>

</div>

{/* ================= SECURITY REGISTRY ================= */}

<div className="col-span-12">

<Card className="shadow-lg">

<CardHeader>

<CardTitle className="flex items-center gap-2">

<Icon icon="mdi:shield-lock"/>

AI Security Registry

</CardTitle>

</CardHeader>

<CardContent>

<table className="w-full border rounded-lg overflow-hidden">

<thead className="bg-gray-100">

<tr>

<th className="p-3 border">System</th>
<th className="p-3 border">Security Control</th>
<th className="p-3 border">Protection Mechanism</th>
<th className="p-3 border">Owner</th>
<th className="p-3 border">Status</th>

</tr>

</thead>

<tbody className="divide-y">

{securitySystems.map((system,i)=>(

<tr key={i} className="hover:bg-blue-50 transition-colors">

<td className="p-3 border">{system.system}</td>
<td className="p-3 border">{system.control}</td>
<td className="p-3 border">{system.protection}</td>
<td className="p-3 border">{system.owner}</td>
<td className="p-3 border font-semibold">{system.status}</td>

</tr>

))}

</tbody>

</table>

</CardContent>

</Card>

</div>

{/* ================= NIST SECURITY LIFECYCLE ================= */}

<div className="col-span-3">

<Card className="bg-indigo-100 hover:shadow-xl transition">

<CardHeader>
<CardTitle>GOVERN</CardTitle>
</CardHeader>

<CardContent>
Define security governance policies
</CardContent>

</Card>

</div>

<div className="col-span-3">

<Card className="bg-yellow-100 hover:shadow-xl transition">

<CardHeader>
<CardTitle>MAP</CardTitle>
</CardHeader>

<CardContent>
Identify AI security vulnerabilities
</CardContent>

</Card>

</div>

<div className="col-span-3">

<Card className="bg-orange-100 hover:shadow-xl transition">

<CardHeader>
<CardTitle>MEASURE</CardTitle>
</CardHeader>

<CardContent>
Evaluate AI system security
</CardContent>

</Card>

</div>

<div className="col-span-3">

<Card className="bg-green-100 hover:shadow-xl transition">

<CardHeader>
<CardTitle>MANAGE</CardTitle>
</CardHeader>

<CardContent>
Mitigate security threats
</CardContent>

</Card>

</div>

{/* ================= SECURITY CONTROL MAPPING ================= */}

<div className="col-span-12">

<Card className="shadow-lg">

<CardHeader>

<CardTitle className="flex items-center gap-2">

<Icon icon="mdi:link-variant"/>

Security → Policy → Control Mapping

</CardTitle>

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

<tbody className="divide-y">

<tr className="hover:bg-gray-50">

<td className="p-3 border">Model tampering</td>
<td className="p-3 border">AI Security</td>
<td className="p-3 border">Model integrity verification</td>
<td className="p-3 border">Integrity logs</td>

</tr>

<tr className="hover:bg-gray-50">

<td className="p-3 border">Data breach</td>
<td className="p-3 border">Privacy & Security</td>
<td className="p-3 border">Encryption</td>
<td className="p-3 border">Security audit report</td>

</tr>

</tbody>

</table>

</CardContent>

</Card>

</div>

</div>

</div>

)

}