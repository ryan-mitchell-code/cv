import type { Profile } from "../types/cv";

export const profile: Profile = {
  name: "Ryan Mitchell",
  title: "Software Engineering Manager / Tech Lead (IAM)",
  summaries: [
    {
      text:
        "Engineering leader specialising in Identity and Access Management, building scalable, secure systems and leading high-performing teams.",
    },
    {
      text:
        "Experienced in leading teams, driving delivery, and improving engineering practices.",
      modes: ["manager"],
    },
    {
      text:
        "Hands-on tech lead with strong focus on architecture and system design.",
      modes: ["techLead"],
    },
    {
      text:
        "Deep expertise in IAM, including OAuth2, OIDC, and Zero Trust architectures.",
      modes: ["iam"],
    },
  ],
};
