"use client"

import { useRouter } from "next/navigation"

import { Card, CardContent } from "@/components/ui/card"

import {
Accordion,
AccordionItem,
AccordionTrigger,
AccordionContent
} from "@/components/ui/accordion"

const sections:any={

governance:{
title:"Governance Structure",
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

export default function SectionPage({params}:{params:{section:string}}){

const router=useRouter()

const section=sections[params.section]

if(!section){
return <div className="p-8">Section not found</div>
}

return(

<div className="p-8 space-y-8">

<button
onClick={()=>router.push("/playbook")}
className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
>
← Back
</button>

<Card className="shadow-xl">

<CardContent className="p-6">

<h2 className="text-2xl font-semibold mb-6">
{section.title}
</h2>

<Accordion type="single" collapsible>

{section.content.map((item:any,index:number)=>(

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

</div>

)

}
