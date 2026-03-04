"use client"

import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"

import {
Accordion,
AccordionItem,
AccordionTrigger,
AccordionContent,
} from "@/components/ui/accordion"

import {
Shield,
AlertTriangle,
Activity,
Database,
Cpu,
CheckCircle,
Rocket,
Eye,
AlertCircle,
Trash2,
FileCheck,
BarChart
} from "lucide-react"

const sections:any = {

governance:{
title:"Governance Structure",
icon:Shield,
color:"from-blue-200 to-blue-100",
content:[
{
title:"Board & Apex Leadership",
text:`• Approve AI risk appetite
• Review quarterly AI reports
• Approve high-risk AI deployments`
},
{
title:"AI Risk & Ethics Committee (AIREC)",
text:`• Maintain AI system inventory
• Review high-risk AI systems
• Approve deployment decisions`
},
{
title:"Chief AI Risk Officer (CARO)",
text:`• Implement governance policies
• Coordinate with regulators
• Manage AI risks`
}
]
},

risk:{
title:"Risk Classification",
icon:AlertTriangle,
color:"from-red-200 to-red-100",
content:[
{
title:"Prohibited AI",
text:`• Social scoring
• Biometric categorization
• Emotion detection`
},
{
title:"High Risk AI",
text:`• Credit scoring
• Hiring algorithms
• Medical diagnosis`
}
]
},

lifecycle:{
title:"AI Lifecycle",
icon:Activity,
color:"from-green-200 to-green-100",
content:[
{
title:"Lifecycle Stages",
text:`Data Collection
Model Development
Testing
Deployment
Monitoring
Decommission`
}
]
},

data:{
title:"Data Governance",
icon:Database,
color:"from-purple-200 to-purple-100",
content:[
{
title:"Data Collection",
text:`• Consent mechanisms
• Data minimization
• Lawful basis`
},
{
title:"Data Processing",
text:`• Bias detection
• Data quality validation`
}
]
},

model:{
title:"Model Development",
icon:Cpu,
color:"from-yellow-200 to-yellow-100",
content:[
{
title:"Secure Development",
text:`• MFA
• Secure training environment
• Access control`
},
{
title:"Threat Modeling",
text:`• Prompt injection
• Data poisoning
• Model extraction`
}
]
},

evaluation:{
title:"Evaluation & Testing",
icon:CheckCircle,
color:"from-teal-200 to-teal-100",
content:[
{
title:"Safety Testing",
text:`• Harmful output detection
• Jailbreak testing`
},
{
title:"Fairness Testing",
text:`• Demographic parity
• Bias detection`
}
]
},

deployment:{
title:"Deployment Controls",
icon:Rocket,
color:"from-indigo-200 to-indigo-100",
content:[
{
title:"Secure Deployment",
text:`• Network isolation
• Authentication`
},
{
title:"Logging",
text:`• prompts
• responses
• security events`
}
]
},

monitoring:{
title:"Monitoring & Assurance",
icon:Eye,
color:"from-green-200 to-green-100",
content:[
{
title:"Real Time Monitoring",
text:`• anomaly detection
• system health`
},
{
title:"Scheduled Evaluations",
text:`• weekly fairness checks
• monthly security scans`
}
]
},

incident:{
title:"Incident Response",
icon:AlertCircle,
color:"from-red-200 to-red-100",
content:[
{
title:"Incident Lifecycle",
text:`Detection
Containment
Investigation
Recovery`
}
]
},

decommission:{
title:"Decommissioning",
icon:Trash2,
color:"from-gray-200 to-gray-100",
content:[
{
title:"System Retirement",
text:`• data deletion
• access revocation
• documentation update`
}
]
},

compliance:{
title:"Compliance & Enforcement",
icon:FileCheck,
color:"from-blue-200 to-blue-100",
content:[
{
title:"Enforcement Tools",
text:`• penalties
• audits
• license suspension`
}
]
},

roadmap:{
title:"Implementation Roadmap",
icon:Rocket,
color:"from-orange-200 to-orange-100",
content:[
{
title:"100 Day Plan",
text:`Day 1-30 Governance
Day 31-60 Inventory
Day 61-100 Controls`
}
]
},

metrics:{
title:"Metrics & Reporting",
icon:BarChart,
color:"from-pink-200 to-pink-100",
content:[
{
title:"Safety Metrics",
text:`• harmful output rate
• jailbreak rate`
},
{
title:"Governance Metrics",
text:`• system inventory coverage
• evaluation completion`
}
]
}

}

export default function Playbook(){

const [activeSection,setActiveSection]=useState<string | null>(null)

return(

<div className="p-8 space-y-8">

<h1 className="text-3xl font-bold">
AI Governance Playbook
</h1>

{/* PLAYBOOK CARDS */}

<div className="grid grid-cols-3 gap-6">

{Object.entries(sections).map(([key,value]:any)=>{

const Icon=value.icon

return(

<Card
key={key}
onClick={()=>setActiveSection(key)}
className={`cursor-pointer hover:scale-105 transition shadow-lg bg-gradient-to-r ${value.color}`}
>

<CardContent className="p-6 flex items-center justify-between">

<span className="font-semibold">
{value.title}
</span>

<Icon size={22}/>

</CardContent>

</Card>

)

})}

</div>

{/* SECTION CONTENT */}

{activeSection &&(

<Card className="shadow-xl">

<CardContent className="p-6">

<h2 className="text-2xl font-semibold mb-6">
{sections[activeSection].title}
</h2>

<Accordion type="single" collapsible>

{sections[activeSection].content.map((item:any,index:number)=>(

<AccordionItem key={index} value={`item-${index}`}>

<AccordionTrigger>
{item.title}
</AccordionTrigger>

<AccordionContent>

<pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded-lg">
{item.text}
</pre>

</AccordionContent>

</AccordionItem>

))}

</Accordion>

</CardContent>

</Card>

)}

</div>

)

}