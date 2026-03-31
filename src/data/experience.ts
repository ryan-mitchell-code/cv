import type { Experience } from "../types/cv";

export const experiences: Experience[] = [
  {
    company: "JPMorganChase",
    role: "Vice President, Lead Software Engineer",
    start: "2022",
    end: "Present",
    achievements: [
      {
        text:
          "Delivered IAM capabilities supporting secure external API access used by enterprise clients in a highly regulated financial environment",
      },
      {
        text:
          "Delivered IAM platform capabilities supporting secure external API access for enterprise clients, improving authentication reliability and security posture",
      },
      {
        text:
          "Lead a cross-location scrum team of 8 engineers delivering secure SSO and identity solutions for externally facing APIs",
        modes: ["manager"],
      },
      {
        text:
          "Manage and mentor 4 engineers, supporting career growth and team performance within a distributed organisation",
        modes: ["manager"],
      },
      {
        text:
          "Drive engineering standards and collaborate with technical leads to unblock delivery and improve development practices",
        modes: ["manager"],
      },
      {
        text:
          "Designed and delivered OAuth-based credential management for Payments Developer Portal integrating with Treasury APIs",
        modes: ["techLead", "iam"],
      },
      {
        text:
          "Built and maintained externally facing login platform using React and Java supporting localisation and dynamic branding",
        modes: ["techLead"],
      },
      {
        text:
          "Implemented embedded step-up authentication flows to enhance application security and user verification",
        modes: ["iam"],
      },
      {
        text:
          "Delivered IAM capabilities supporting secure external access in a highly regulated financial environment",
        modes: ["iam"],
      },
    ],
  },
  {
    company: "JPMorganChase",
    role: "Software Engineer",
    start: "2019",
    end: "2022",
    achievements: [
      {
        text:
          "Built and integrated developer tooling to improve software quality and shift testing practices earlier in the development lifecycle",
        modes: ["techLead"],
      },
      {
        text:
          "Developed tooling to enforce audit compliance for production releases across engineering teams",
        modes: ["techLead"],
      },
      {
        text:
          "Collaborated with multiple teams to drive adoption of internal tools and improve engineering standards",
        modes: ["manager"],
      },
      {
        text:
          "Integrated SaaS solutions with internal systems to provide commit-level analysis and insights",
        modes: ["techLead"],
      },
    ],
  },
  {
    company: "KMSoft",
    role: "Junior Software Engineer",
    start: "2018",
    end: "2019",
    achievements: [
      {
        text:
          "Developed features for a SaaS stock management platform used in healthcare environments",
      },
      {
        text:
          "Built software for barcode scanners supporting offline-first synchronisation for remote operations",
        modes: ["techLead"],
      },
      {
        text:
          "Engaged with customers and stakeholders to support product adoption in real-world environments",
        modes: ["manager"],
      },
    ],
  },
];
