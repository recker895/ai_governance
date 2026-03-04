"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";

export default function AccountabilityDashboard() {

const accountabilitySystems = [

{
system:"Loan Approval AI",
owner:"Finance Department",
audit:"Decision Logging",
review:"Jan 2026",
status:"Active"
},

{
system:"Hiring Screening AI",
owner:"HR Department",
audit:"Bias Audit",
review:"Feb 2026",
status:"Under Review"
},

{
system:"Customer Support Chatbot",
owner:"Customer Operations",
audit:"Conversation Logs",
review:"Dec 2025",
status:"Active"
}

]

return(

<div className="p-6 w-full">

<div className="grid grid-cols-12 gap-6">

{/* ================= METRICS ================= */}

<div className="col-span-3">

<Card className="bg-gradient-to-r from-blue-100 to-blue-200 hover:scale-105 transition-transform shadow-lg">

<CardHeader className="flex flex-row items-center justify-between">

<CardTitle className="text-blue-900">
Accountable Systems
</CardTitle>

<Icon icon="mdi:account-check" width="28" className="text-blue-700"/>

</CardHeader>

<CardContent>
<h2 className="text-4xl font-bold text-blue-700">3</h2>
</CardContent>

</Card>

</div>

<div className="col-span-3">

<Card className="bg-gradient-to-r from-green-100 to-green-200 hover:scale-105 transition-transform shadow-lg">

<CardHeader className="flex flex-row items-center justify-between">

<CardTitle className="text-green-900">
Audit Logs
</CardTitle>

<Icon icon="mdi:file-document-outline" width="28" className="text-green-700"/>

</CardHeader>

<CardContent>
<h2 className="text-4xl font-bold text-green-700">7</h2>
</CardContent>

</Card>

</div>

<div className="col-span-3">

<Card className="bg-gradient-to-r from-purple-100 to-purple-200 hover:scale-105 transition-transform shadow-lg">

<CardHeader className="flex flex-row items-center justify-between">

<CardTitle className="text-purple-900">
Assigned Owners
</CardTitle>

<Icon icon="mdi:account-group" width="28" className="text-purple-700"/>

</CardHeader>

<CardContent>
<h2 className="text-4xl font-bold text-purple-700">3</h2>
</CardContent>

</Card>

</div>

<div className="col-span-3">

<Card className="bg-gradient-to-r from-red-100 to-red-200 hover:scale-105 transition-transform shadow-lg">

<CardHeader className="flex flex-row items-center justify-between">

<CardTitle className="text-red-900">
Incident Reports
</CardTitle>

<Icon icon="mdi:alert-circle-outline" width="28" className="text-red-700"/>

</CardHeader>

<CardContent>
<h2 className="text-4xl font-bold text-red-700">1</h2>
</CardContent>

</Card>

</div>


{/* ================= ACCOUNTABILITY REGISTRY ================= */}

<div className="col-span-12">

<Card className="shadow-lg">

<CardHeader>

<CardTitle className="flex items-center gap-2">

<Icon icon="mdi:shield-account" width="22"/>

AI Accountability Registry

</CardTitle>

</CardHeader>

<CardContent>

<table className="w-full border rounded-lg overflow-hidden">

<thead className="bg-gray-100">

<tr>

<th className="p-3 border">System</th>
<th className="p-3 border">Responsible Owner</th>
<th className="p-3 border">Audit Mechanism</th>
<th className="p-3 border">Last Review</th>
<th className="p-3 border">Status</th>

</tr>

</thead>

<tbody className="divide-y">

{accountabilitySystems.map((system,i)=>(

<tr key={i} className="hover:bg-blue-50 transition-colors">

<td className="p-3 border">{system.system}</td>
<td className="p-3 border">{system.owner}</td>
<td className="p-3 border">{system.audit}</td>
<td className="p-3 border">{system.review}</td>
<td className="p-3 border font-semibold">{system.status}</td>

</tr>

))}

</tbody>

</table>

</CardContent>

</Card>

</div>


{/* ================= NIST LIFECYCLE ================= */}

<div className="col-span-3">

<Card className="bg-indigo-100 hover:shadow-xl transition">

<CardHeader>
<CardTitle>GOVERN</CardTitle>
</CardHeader>

<CardContent>
Define accountability policies
</CardContent>

</Card>

</div>

<div className="col-span-3">

<Card className="bg-yellow-100 hover:shadow-xl transition">

<CardHeader>
<CardTitle>MAP</CardTitle>
</CardHeader>

<CardContent>
Identify responsible stakeholders
</CardContent>

</Card>

</div>

<div className="col-span-3">

<Card className="bg-orange-100 hover:shadow-xl transition">

<CardHeader>
<CardTitle>MEASURE</CardTitle>
</CardHeader>

<CardContent>
Audit AI decisions
</CardContent>

</Card>

</div>

<div className="col-span-3">

<Card className="bg-green-100 hover:shadow-xl transition">

<CardHeader>
<CardTitle>MANAGE</CardTitle>
</CardHeader>

<CardContent>
Correct governance failures
</CardContent>

</Card>

</div>


{/* ================= CONTROL MAPPING ================= */}

<div className="col-span-12">

<Card className="shadow-lg">

<CardHeader>

<CardTitle className="flex items-center gap-2">

<Icon icon="mdi:link-variant"/>

Accountability → Policy → Control Mapping

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

<td className="p-3 border">Untraceable AI decisions</td>
<td className="p-3 border">Accountability</td>
<td className="p-3 border">Decision logging</td>
<td className="p-3 border">Audit logs</td>

</tr>

<tr className="hover:bg-gray-50">

<td className="p-3 border">Model misuse</td>
<td className="p-3 border">Responsible AI governance</td>
<td className="p-3 border">Owner approval workflow</td>
<td className="p-3 border">Access records</td>

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