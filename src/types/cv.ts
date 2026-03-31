export interface Experience {
  company: string;
  roles: {
    title: string;
    start: string;
    end: string;
  }[];
  achievements: {
    text: string;
    modes?: ("manager" | "techLead" | "iam")[];
  }[];
}

export interface Profile {
  name: string;
  title: string;
  summaries: {
    text: string;
    modes?: ("manager" | "techLead" | "iam")[];
  }[];
  links: {
    label: string;
    url: string;
  }[];
}
