"use client"

import { useParams } from "next/navigation"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const playbookContent: Record<string, any> = {

  governance: {
    title: "Governance Structure",
    sections: [
      {
        title: "Board & Apex Leadership",
        content: `
• Approve AI risk appetite
• Approve prohibited AI uses
• Review quarterly AI risk reports
• Approve high-risk AI deployments
        `,
      },
      {
        title: "AI Risk & Ethics Committee (AIREC)",
        content: `
Central governance body responsible for:

• Maintaining AI system inventory
• Reviewing high-risk systems
• Approving deployment
• Managing risk classification
        `,
      },
      {
        title: "Chief AI Risk Officer (CARO)",
        content: `
Responsible for AI governance program:

• Regulatory coordination
• Risk management
• Policy implementation
• Incident escalation
        `,
      },
    ],
  },

  risk: {
    title: "Risk Classification",
    sections: [
      {
        title: "Prohibited AI Systems",
        content: `
• Social scoring systems
• Biometric categorization by sensitive attributes
• Emotion detection for hiring decisions
• Subliminal manipulation of citizens
        `,
      },
      {
        title: "High Risk AI",
        content: `
Examples include:

• Credit scoring systems
• Hiring algorithms
• Medical diagnosis systems
• Critical infrastructure AI
        `,
      },
      {
        title: "Medium & Low Risk",
        content: `
Medium Risk:
• Fraud detection
• Content moderation

Low Risk:
• Code assistants
• Internal chatbots
        `,
      },
    ],
  },

  lifecycle: {
    title: "AI Lifecycle",
    sections: [
      {
        title: "Lifecycle Stages",
        content: `
Data Collection
↓
Model Development
↓
Evaluation
↓
Deployment
↓
Monitoring
↓
Decommissioning
        `,
      },
    ],
  },

  data: {
    title: "Data Governance",
    sections: [
      {
        title: "Data Collection",
        content: `
• Lawful basis documentation
• Consent mechanisms
• Data minimization
        `,
      },
      {
        title: "Processing Controls",
        content: `
• Bias detection
• Data quality checks
• Demographic representation
        `,
      },
      {
        title: "Data Storage & Deletion",
        content: `
• Encryption
• Retention policies
• Verifiable deletion
        `,
      },
    ],
  },

  model: {
    title: "Model Development",
    sections: [
      {
        title: "Secure Development",
        content: `
• Multi-factor authentication
• Secure training environments
• Access controls
• Network segmentation
        `,
      },
      {
        title: "Threat Modeling",
        content: `
Identify threats such as:

• Prompt injection
• Data poisoning
• Model extraction
• Adversarial attacks
        `,
      },
      {
        title: "AI Bill of Materials",
        content: `
Documentation of:

• datasets
• pretrained models
• libraries
• APIs used
        `,
      },
    ],
  },

  evaluation: {
    title: "Evaluation & Testing",
    sections: [
      {
        title: "Safety Testing",
        content: `
• Harmful output detection
• Jailbreak resistance
• Misuse prevention
        `,
      },
      {
        title: "Security Testing",
        content: `
• Model extraction resistance
• Backdoor detection
• Adversarial testing
        `,
      },
      {
        title: "Fairness Testing",
        content: `
• Demographic parity
• Language fairness
• Bias detection
        `,
      },
    ],
  },

  deployment: {
    title: "Deployment Controls",
    sections: [
      {
        title: "Secure Deployment",
        content: `
• Network isolation
• Authentication
• Rate limiting
        `,
      },
      {
        title: "Logging",
        content: `
Logs must capture:

• prompts
• responses
• system changes
• security events
        `,
      },
    ],
  },

  monitoring: {
    title: "Monitoring & Assurance",
    sections: [
      {
        title: "Real-Time Monitoring",
        content: `
• performance tracking
• anomaly detection
• system health monitoring
        `,
      },
      {
        title: "Scheduled Evaluations",
        content: `
• weekly fairness checks
• monthly security scans
• quarterly audits
        `,
      },
    ],
  },

  incident: {
    title: "Incident Response",
    sections: [
      {
        title: "Incident Lifecycle",
        content: `
Detection
↓
Containment
↓
Investigation
↓
Recovery
↓
Lessons Learned
        `,
      },
      {
        title: "Critical Incidents",
        content: `
• safety failures
• privacy breaches
• election misinformation
• infrastructure disruption
        `,
      },
    ],
  },

  decommission: {
    title: "Decommissioning",
    sections: [
      {
        title: "System Retirement",
        content: `
1. Decommission planning
2. Data inventory
3. Access revocation
4. Secure deletion
5. Documentation update
        `,
      },
    ],
  },

  compliance: {
    title: "Compliance & Enforcement",
    sections: [
      {
        title: "Enforcement Tools",
        content: `
• administrative penalties
• license suspension
• mandatory audits
• criminal referral
        `,
      },
      {
        title: "Safe Harbor",
        content: `
Organizations receive protections if they:

• disclose incidents
• cooperate with regulators
• demonstrate responsible AI governance
        `,
      },
    ],
  },

  roadmap: {
    title: "Implementation Roadmap",
    sections: [
      {
        title: "100 Day Plan",
        content: `
Days 1-30:
• appoint CARO
• create governance committee

Days 31-60:
• AI system inventory

Days 61-100:
• evaluation gates implementation
        `,
      },
    ],
  },

  metrics: {
    title: "Metrics & Reporting",
    sections: [
      {
        title: "Safety Metrics",
        content: `
• harmful output rate
• jailbreak success rate
        `,
      },
      {
        title: "Governance Metrics",
        content: `
• system inventory coverage
• evaluation completion rate
        `,
      },
    ],
  },
}

export default function PlaybookSection() {
  const params = useParams()
  const section = params.section as string
  const data = playbookContent[section]

  if (!data) return <div className="p-6">Section not found</div>

  return (
    <div className="p-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

      <Accordion type="single" collapsible className="w-full">
        {data.sections.map((item: any, index: number) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                {item.content}
              </pre>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}