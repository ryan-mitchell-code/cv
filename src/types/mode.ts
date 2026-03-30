export const CV_MODES = ["manager", "techLead", "iam"] as const;

export type CVMode = (typeof CV_MODES)[number];
