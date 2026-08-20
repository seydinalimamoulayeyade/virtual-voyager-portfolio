export type Project = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  impact: string;
  stack: string[];
  href: string;
  linkLabel: string;
  repositoryHref?: string;
  repositoryLabel?: string;
  image?: {
    src: string;
    alt: string;
  };
  featured?: boolean;
  secondary?: boolean;
};

export type MilestoneCategory =
  | "Certifications"
  | "Projets"
  | "Compétitions"
  | "Formations";

export type Milestone = {
  date: string;
  title: string;
  description: string;
  category: Exclude<MilestoneCategory, "Compétitions">;
};

export type Article = {
  date: string;
  language: "FR" | "EN";
  title: string;
  excerpt: string;
  href: string;
};
