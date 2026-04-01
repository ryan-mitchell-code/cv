import type { Experience } from "../types/cv";

export const experiences: Experience[] = [
  {
    company: "JPMorganChase",
    roles: [
      {
        title: "Vice President, Lead Software Engineer",
        start: "2025",
        end: "Present",
      },
      {
        title: "Senior Associate Software Engineer",
        start: "2023",
        end: "2025",
      },
      {
        title: "Associate Software Engineer",
        start: "2022",
        end: "2023",
      },
      {
        title: "Software Engineer",
        start: "2019",
        end: "2022",
      },
    ],
    achievements: [
      {
        text:
          "Promoted multiple times within JPMorganChase, progressing from Software Engineer to Vice President",
      },
      {
        text:
          "Delivered IAM platform capabilities enabling secure external API access for enterprise clients in a high-volume, regulated financial environment",
      },
      {
        text:
          "Delivered IAM solutions supporting secure access to externally facing APIs used across enterprise integrations",
      },
      {
        text:
          "Led a cross-location team of 8 engineers delivering SSO and identity solutions for externally facing APIs",
      },
      {
        text:
          "Managed and mentored engineers, supporting career growth and improving team performance within a distributed organisation",
      },
      {
        text:
          "Collaborated with technical leads to define engineering standards and unblock critical deliveries",
      },
      {
        text:
          "Designed and delivered OAuth-based credential management enabling secure integration with Treasury API products via the Payments Developer Portal",
        modes: ["techLead", "iam"],
      },
      {
        text:
          "Built and maintained externally facing login platform using React and Java, supporting localisation and dynamic branding",
        modes: ["techLead"],
      },
      {
        text:
          "Implemented embedded step-up authentication flows to enhance application security and user verification",
        modes: ["iam"],
      },
    ],
  },
  {
    company: "KMSoft",
    roles: [
      {
        title: "Junior Software Engineer",
        start: "2018",
        end: "2019",
      },
    ],
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
          "Worked with customers and stakeholders to support product adoption in real-world environments",
      },
    ],
  },
];
