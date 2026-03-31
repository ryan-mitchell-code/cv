import type { Profile } from "../types/cv";

export const profile: Profile = {
  name: "Ryan Mitchell",
  title: "Engineering Manager / Tech Lead (IAM & Identity Platforms)",

  summaries: [
    {
      text:
        "Engineering leader specialising in Identity and Access Management, delivering secure authentication and credential management solutions for externally facing platforms within financial services. Experienced leading distributed teams and building IAM capabilities that enable secure, scalable API access.",
    },
    {
      text:
        "Leading cross-location engineering teams, driving delivery of critical IAM platforms, and shaping engineering standards across teams.",
      modes: ["manager"],
    },
    {
      text:
        "Hands-on technical leader designing and building scalable systems using React, Java, and cloud-native technologies in high-impact environments.",
      modes: ["techLead"],
    },
    {
      text:
        "Specialist in IAM, including SSO, OAuth-based credential management, step-up authentication, and secure access patterns for external APIs.",
      modes: ["iam"],
    },
  ],

  links: [
    {
      label: "GitHub",
      url: "https://github.com/ryan-mitchell-code",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ryan-mitchell-noc/",
    },
    {
      label: "Interactive CV",
      url: "https://ryan-mitchell-code.github.io/cv/",
    },
  ],
};
