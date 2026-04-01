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

export interface Publication {
  title: string;
  description: string;
  link?: {
    label: string;
    url: string;
  };
}

export interface Education {
  institution: string;
  degree: string;
  start: string;
  end: string;
  grade?: string;
  highlights?: string[];
}
