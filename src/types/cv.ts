export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  achievements: {
    text: string;
    modes?: ("manager" | "techLead" | "iam")[];
  }[];
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
}
