import type { Experience } from "../types/cv";

export const experiences: Experience[] = [
  {
    company: "Your Company",
    role: "Software Engineering Manager / Tech Lead",
    start: "2022",
    end: "Present",
    achievements: [
      {
        text: "Led a team of engineers delivering IAM platform",
        modes: ["manager"],
      },
      {
        text: "Designed scalable IAM architecture",
        modes: ["techLead", "iam"],
      },
      {
        text: "Implemented OIDC authentication flows",
        modes: ["iam"],
      },
    ],
  },
];
