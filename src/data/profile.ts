import type { Profile } from "../types/cv";

export const profile: Profile = {
  name: "Ryan Mitchell",
  title: "Engineering Manager / Tech Lead (IAM & Identity Platforms)",

  summaries: [
    {
      text:
        "Engineering leader specialising in Identity and Access Management, delivering secure, scalable authentication and credential management solutions for externally facing platforms within financial services. Experienced leading cross-location teams and building critical IAM capabilities supporting secure API access at scale.",
    },
    {
      text:
        "Leading cross-location engineering teams, driving delivery of critical IAM capabilities, and shaping engineering practices across teams.",
      modes: ["manager"],
    },
    {
      text:
        "Hands-on tech lead with experience designing and building scalable systems using React, Java, and cloud-native technologies.",
      modes: ["techLead"],
    },
    {
      text:
        "Deep expertise in IAM, including SSO, OAuth-based credential management, step-up authentication, and secure API access for external consumers.",
      modes: ["iam"],
    },
  ],
};
