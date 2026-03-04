"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

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
color:"from-blue-200 to-blue-100"
},

risk:{
title:"Risk Classification",
icon:AlertTriangle,
color:"from-red-200 to-red-100"
},

lifecycle:{
title:"AI Lifecycle",
icon:Activity,
color:"from-green-200 to-green-100"
},

data:{
title:"Data Governance",
icon:Database,
color:"from-purple-200 to-purple-100"
},

model:{
title:"Model Development",
icon:Cpu,
color:"from-yellow-200 to-yellow-100"
},

evaluation:{
title:"Evaluation & Testing",
icon:CheckCircle,
color:"from-teal-200 to-teal-100"
},

deployment:{
title:"Deployment Controls",
icon:Rocket,
color:"from-indigo-200 to-indigo-100"
},

monitoring:{
title:"Monitoring & Assurance",
icon:Eye,
color:"from-green-200 to-green-100"
},

incident:{
title:"Incident Response",
icon:AlertCircle,
color:"from-red-200 to-red-100"
},

decommission:{
title:"Decommissioning",
icon:Trash2,
color:"from-gray-200 to-gray-100"
},

compliance:{
title:"Compliance & Enforcement",
icon:FileCheck,
color:"from-blue-200 to-blue-100"
},

roadmap:{
title:"Implementation Roadmap",
icon:Rocket,
color:"from-orange-200 to-orange-100"
},

metrics:{
title:"Metrics & Reporting",
icon:BarChart,
color:"from-pink-200 to-pink-100"
}

}

export default function Playbook(){

return(

<div className="p-8 space-y-8">

<h1 className="text-3xl font-bold">
AI Governance Playbook
</h1>

<div className="grid grid-cols-3 gap-6">

{Object.entries(sections).map(([key,value]:any)=>{

const Icon=value.icon

return(

<Link key={key} href={`/playbook/${key}`}>

<Card className={`cursor-pointer hover:scale-105 transition shadow-lg bg-gradient-to-r ${value.color}`}>

<CardContent className="p-6 flex items-center justify-between">

<span className="font-semibold">
{value.title}
</span>

<Icon size={22}/>

</CardContent>

</Card>

</Link>

)

})}

</div>

</div>

)

}
