"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), { ssr: false })

const graphData = {

nodes: [

{ id:"Human-Centric Approach", type:"principle", desc:"Human oversight and appeals" },
{ id:"Privacy by Design", type:"principle", desc:"Data protection principle" },
{ id:"Security by Design", type:"principle", desc:"Secure system architecture" },
{ id:"Transparency", type:"principle", desc:"Explainability and documentation" },
{ id:"Inclusivity and Fairness", type:"principle", desc:"Bias mitigation" },
{ id:"Accountability", type:"principle", desc:"Clear responsibility" },
{ id:"Continuous Assurance", type:"principle", desc:"Monitoring and evaluation" },

{ id:"Board and Apex Leadership", type:"governance", desc:"Strategic oversight" },
{ id:"Chief AI Risk Officer", type:"governance", desc:"AI risk leadership" },
{ id:"AI Risk and Ethics Committee", type:"governance", desc:"Ethics review body" },
{ id:"Security Lead", type:"governance", desc:"Security leadership" },
{ id:"Data Steward", type:"governance", desc:"Data governance owner" },

{ id:"AI System Inventory", type:"inventory", desc:"Register of AI systems" },
{ id:"System Identification", type:"inventory", desc:"Identify AI systems" },
{ id:"Metadata Collection", type:"inventory", desc:"Collect system metadata" },
{ id:"Risk Classification", type:"inventory", desc:"Assign risk level" },

{ id:"High Risk AI", type:"risk_class", desc:"Critical AI systems" },
{ id:"Medium Risk AI", type:"risk_class", desc:"Moderate risk AI" },
{ id:"Low Risk AI", type:"risk_class", desc:"Minimal risk AI" },

{ id:"GOVERN", type:"nist", desc:"Governance structures" },
{ id:"MAP", type:"nist", desc:"Identify AI risks" },
{ id:"MEASURE", type:"nist", desc:"Evaluate performance" },
{ id:"MANAGE", type:"nist", desc:"Risk mitigation" },

{ id:"Privacy Risk", type:"risk", desc:"Personal data exposure" },
{ id:"Security Risk", type:"risk", desc:"Cybersecurity threats" },
{ id:"Bias Risk", type:"risk", desc:"Discrimination risk" },
{ id:"Operational Risk", type:"risk", desc:"System failures" },
{ id:"Societal Risk", type:"risk", desc:"Impact on society" },
{ id:"Legal Risk", type:"risk", desc:"Regulatory violations" },

{ id:"DPDP Act 2023", type:"policy", desc:"India data protection law" },
{ id:"EU AI Act", type:"policy", desc:"EU AI regulation" },
{ id:"CERT-In Directions", type:"policy", desc:"Cyber incident reporting rules" },
{ id:"ISO 42001", type:"policy", desc:"AI management system standard" },

{ id:"Access Control", type:"control", desc:"Restrict access to systems" },
{ id:"Bias Testing", type:"control", desc:"Evaluate model fairness" },
{ id:"Audit Logging", type:"control", desc:"Maintain system logs" },
{ id:"Incident Response", type:"control", desc:"Handle AI incidents" }

],

links: [

{ source:"Human-Centric Approach", target:"Board and Apex Leadership" },
{ source:"Accountability", target:"Chief AI Risk Officer" },
{ source:"Transparency", target:"AI Risk and Ethics Committee" },

{ source:"Board and Apex Leadership", target:"GOVERN" },

{ source:"Chief AI Risk Officer", target:"AI System Inventory" },
{ source:"AI Risk and Ethics Committee", target:"Risk Classification" },

{ source:"AI System Inventory", target:"System Identification" },
{ source:"System Identification", target:"Metadata Collection" },
{ source:"Metadata Collection", target:"Risk Classification" },

{ source:"Risk Classification", target:"High Risk AI" },
{ source:"Risk Classification", target:"Medium Risk AI" },
{ source:"Risk Classification", target:"Low Risk AI" },

{ source:"High Risk AI", target:"GOVERN" },
{ source:"Medium Risk AI", target:"MAP" },
{ source:"Low Risk AI", target:"MEASURE" },

{ source:"GOVERN", target:"MAP" },
{ source:"MAP", target:"MEASURE" },
{ source:"MEASURE", target:"MANAGE" },
{ source:"MANAGE", target:"GOVERN" },

{ source:"MAP", target:"Privacy Risk" },
{ source:"MAP", target:"Security Risk" },
{ source:"MAP", target:"Bias Risk" },
{ source:"MAP", target:"Operational Risk" },
{ source:"MAP", target:"Societal Risk" },
{ source:"MAP", target:"Legal Risk" },

{ source:"Privacy Risk", target:"DPDP Act 2023" },
{ source:"Security Risk", target:"CERT-In Directions" },
{ source:"Bias Risk", target:"EU AI Act" },
{ source:"Operational Risk", target:"ISO 42001" },

{ source:"DPDP Act 2023", target:"Access Control" },
{ source:"EU AI Act", target:"Bias Testing" },
{ source:"ISO 42001", target:"Audit Logging" },
{ source:"CERT-In Directions", target:"Incident Response" },
{ source:"DPDP Act 2023", target:"Access Control" },
{ source:"EU AI Act", target:"Bias Testing" },
{ source:"ISO 42001", target:"Audit Logging" },
{ source:"CERT-In Directions", target:"Incident Response" },

// PRINCIPLE CONNECTIONS
{ source:"Privacy by Design", target:"Privacy Risk" },
{ source:"Security by Design", target:"Security Risk" },
{ source:"Inclusivity and Fairness", target:"Bias Risk" },
{ source:"Continuous Assurance", target:"MEASURE" },

// GOVERNANCE CONNECTIONS
{ source:"Data Steward", target:"Metadata Collection" },
{ source:"Security Lead", target:"Security Risk" },

// PRINCIPLES → GOVERNANCE
{ source:"Human-Centric Approach", target:"Board and Apex Leadership" },
{ source:"Accountability", target:"Chief AI Risk Officer" },
{ source:"Transparency", target:"AI Risk and Ethics Committee" },

// GOVERNANCE → NIST
{ source:"Board and Apex Leadership", target:"GOVERN" }

]

}

export default function FrameworkGraph(){

const [selected,setSelected]=useState<any>(null)

const drawNode=(node:any,ctx:any,scale:number)=>{

const label=node.id
const fontSize=12/scale
ctx.font=`${fontSize}px Sans-Serif`

let color="#ccc"

if(node.type==="principle")color="#4CAF50"
if(node.type==="governance")color="#795548"
if(node.type==="inventory")color="#009688"
if(node.type==="risk_class")color="#FFC107"
if(node.type==="nist")color="#1976D2"
if(node.type==="risk")color="#FF9800"
if(node.type==="policy")color="#9C27B0"
if(node.type==="control")color="#F44336"

ctx.beginPath()
ctx.arc(node.x,node.y,8,0,2*Math.PI)
ctx.fillStyle=color
ctx.fill()

ctx.fillStyle="#000"
ctx.fillText(label,node.x+10,node.y+4)

}

return(

<div style={{display:"flex"}}>

<div style={{width:"75%",height:"750px"}}>

<ForceGraph2D
graphData={graphData}
nodeCanvasObject={(node,ctx,scale)=>drawNode(node,ctx,scale)}
nodePointerAreaPaint={(node:any,color:string,ctx:any)=>{
ctx.fillStyle=color
ctx.beginPath()
ctx.arc(node.x,node.y,10,0,2*Math.PI)
ctx.fill()
}}
linkDirectionalParticles={2}
linkDirectionalParticleSpeed={0.004}
linkWidth={2}
onNodeClick={(node:any)=>setSelected(node)}
/>

</div>

<div style={{width:"25%",padding:"20px",background:"#f5f5f5"}}>

{selected ? (
<div>
<h3>{selected.id}</h3>
<p>{selected.desc}</p>
<p><b>Type:</b> {selected.type}</p>
</div>
) : (
<p>Click a node to view details</p>
)}

</div>

</div>

)

}
