import { uniqueId } from "lodash"

interface MenuItem {
  id?: string
  name?: string
  icon?: string
  url?: string
  heading?: string
  children?: MenuItem[]
}

const SidebarContent: MenuItem[] = [

  {
    heading: "AI PLAYBOOK",
    children: [
      {
        id: uniqueId(),
        name: "AI Governance Playbook",
        icon: "solar:book-linear",
        url: "/playbook"
      }
    ]
  },

  {
    heading: "AI GOVERNANCE",
    children: [
      {
        id: uniqueId(),
        name: "Human-Centric Approach",
        icon: "solar:users-group-rounded-linear",
        url: "/human-centric"
      },
      {
        id: uniqueId(),
        name: "Risk Proportionality",
        icon: "solar:shield-warning-linear",
        url: "/risk"
      },
  {
id: uniqueId(),
name: "Privacy by Design",
icon: "solar:lock-linear",
url: "/privacy"
},
      {
        id: uniqueId(),
        name: "Transparency and Explainability",
        icon: "solar:eye-linear",
        url: "/transparency"
      },
      {
        id: uniqueId(),
        name: "Accountability and Traceability",
        icon: "solar:clipboard-check-linear",
        url: "/accountability"
      },
      {
        id: uniqueId(),
        name: "Security by Design",
        icon: "solar:shield-check-linear",
        url: "/security"
      },
      {
        id: uniqueId(),
        name: "Inclusivity and Fairness",
        icon: "solar:heart-linear",
        url: "/fairness"
      },
      {
        id: uniqueId(),
        name: "Continuous Assurance",
        icon: "solar:refresh-linear",
        url: "/assurance"
      }
    ]
  },

  {
    heading: "FRAMEWORK MAP",
    children: [
      {
        id: uniqueId(),
        name: "Governance Map",
        icon: "solar:diagram-up-linear",
        url: "/framework-integration"
      }
    ]
  }

]

export default SidebarContent