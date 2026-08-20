import type { Article, Milestone, Project } from "@/types/portfolio";

export const identity = {
  name: "Seydina Limamou Laye Yade",
  brand: "Virtual Voyager",
  role: "Cloud & DevOps Engineer",
  location: "Dakar, Sénégal",
  email: "seydinalimamoulayeyade@gmail.com",
  phone: "+221 77 419 34 89",
  github: "https://github.com/seydinalimamoulayeyade",
  linkedin: "https://www.linkedin.com/in/limamou-laye/",
  medium: "https://seydinalimamoulayeyade.medium.com",
  credly: "https://www.credly.com/badges/853fa747-5a70-4e3b-8652-3bd5a52fc3b7/public_url",
} as const;

export const projects: Project[] = [
  {
    id: "justifai",
    name: "JustifAI",
    eyebrow: "Serverless · Event-driven · IaC",
    description: "Une application AWS serverless qui extrait, classe et suit les justificatifs administratifs de bout en bout, avec revue des cas ambigus et notification de l’usager.",
    impact: "6 modules Terraform · 3 Lambdas + DLQ · Cognito/JWT · CI GitHub Actions",
    stack: ["AWS", "Lambda", "Textract", "DynamoDB", "Terraform"],
    href: "https://github.com/seydinalimamoulayeyade/justifai",
    linkLabel: "Explorer l’architecture",
    featured: true,
  },
  {
    id: "devops-portfolio-mern",
    name: "DevOps Portfolio MERN",
    eyebrow: "Fil rouge ODC · DevSecOps",
    description: "L’application fullstack de la formation Cloud & DevOps, industrialisée couche après couche : Docker, qualité, sécurité shift-left, Kubernetes, Terraform et observabilité.",
    impact: "59/59 tests · scan Trivy documenté à 0 CRITICAL · pipeline Jenkins 10 étapes",
    stack: ["React 19", "Node.js 22", "Jenkins", "Trivy", "Kubernetes"],
    href: "https://devops-portfolio-mern.vercel.app/",
    linkLabel: "Voir le déploiement",
    repositoryHref: "https://github.com/seydinalimamoulayeyade/devops-portfolio-mern",
    repositoryLabel: "Voir le dépôt",
    image: {
      src: "/projects/devops-portfolio-dashboard.webp",
      alt: "Page d’accueil déployée du portfolio MERN présentant le profil Cloud et DevOps de Seydina.",
    },
  },
  {
    id: "teranga-ai",
    name: "Teranga AI",
    eyebrow: "IA utile · Résilience climatique",
    description: "Une plateforme d’intelligence climatique conçue pour le Sahel : alertes précoces, aide à la décision agricole et conseil vocal accessible dans les langues locales.",
    impact: "10 pays · 9 langues · 5 algorithmes ML · anticipation de 2 à 4 semaines",
    stack: ["IA", "Climat", "Agriculture", "OpenWeatherMap", "FAO/GIEWS"],
    href: "https://teranga-assistant.onrender.com/",
    linkLabel: "Explorer la plateforme",
    image: {
      src: "/projects/teranga-ai-platform.webp",
      alt: "Accueil de Teranga AI présentant les alertes climatiques et l’aide à la décision agricole pour le Sahel.",
    },
  },
  {
    id: "viaops",
    name: "ViaOps",
    eyebrow: "Open source · Transmission",
    description: "Un compagnon de démarrage DevOps structuré comme un pipeline réel : modules courts, quiz, progression locale et parcours fil rouge du git push à la production.",
    impact: "9 modules + bonus ArgoCD · ~90 min · zéro framework · CI/CD GitHub Actions",
    stack: ["DevOps", "Docker", "GitHub Actions", "Nginx", "Vanilla JS"],
    href: "https://seydinalimamoulayeyade.github.io/viaops/",
    linkLabel: "Parcourir la démo",
    repositoryHref: "https://github.com/seydinalimamoulayeyade/viaops",
    repositoryLabel: "Voir le dépôt",
    image: {
      src: "/projects/viaops-blueprint.webp",
      alt: "Interface Blueprint de ViaOps montrant un parcours d’apprentissage structuré comme un pipeline DevOps.",
    },
  },
  {
    id: "microservices-ecommerce",
    name: "Microservices E-commerce",
    eyebrow: "Architecture distribuée · AWS",
    description: "Un e-commerce découpé en cinq services indépendants derrière une API Gateway : identité JWT centralisée, bases isolées et passage de Docker Compose à AWS EKS.",
    impact: "5 services · 4 bases MongoDB · pipeline Jenkins 8 étapes · EKS via Terraform",
    stack: ["Node.js", "Docker", "Kubernetes", "AWS EKS", "Terraform"],
    href: "https://github.com/seydinalimamoulayeyade/microservices-ecommerce",
    linkLabel: "Explorer les services",
    secondary: true,
  },
  {
    id: "deploy-board",
    name: "Deploy Board",
    eyebrow: "CI/CD · Pilotage temps réel",
    description: "Un centre de contrôle pour les pipelines Jenkins : qualité SonarQube, logs, artefacts, historique par environnement et rollback d’un build stable.",
    impact: "Polling 10 s · JWT + rate limiting · rollback · notifications Slack",
    stack: ["React", "Express", "MongoDB", "Jenkins", "SonarQube"],
    href: "https://github.com/seydinalimamoulayeyade/deploy-board",
    linkLabel: "Voir le dépôt",
    secondary: true,
  },
  {
    id: "api-health-monitor",
    name: "API Health Monitor",
    eyebrow: "Observabilité · SRE",
    description: "Une couche de supervision qui sonde les APIs du portfolio, expose leurs métriques et transforme indisponibilité, latence ou erreurs en alertes actionnables.",
    impact: "Sonde 30 s · Prometheus/Grafana · Alertmanager vers Slack · stack Docker",
    stack: ["Prometheus", "Grafana", "Alertmanager", "React", "Docker"],
    href: "https://github.com/seydinalimamoulayeyade/api-health-monitor",
    linkLabel: "Explorer l’observabilité",
    secondary: true,
  },
];

export const articles: Article[] = [
  {
    date: "06.07.2026",
    language: "FR",
    title: "Le bug qui m’a plus appris que le schéma d’architecture",
    excerpt: "Quand un échec d’exécution devient une meilleure leçon de système distribué que le diagramme qui l’avait précédé.",
    href: "https://seydinalimamoulayeyade.medium.com/le-bug-qui-ma-plus-appris-que-le-sch%C3%A9ma-d-architecture-9266bb35f114",
  },
  {
    date: "19.03.2025",
    language: "EN",
    title: "GitHub commit messages",
    excerpt: "Des commits lisibles comme une documentation continue : intention, portée et historique au service de l’équipe.",
    href: "https://seydinalimamoulayeyade.medium.com/github-commit-messages-b92da0d61f33",
  },
  {
    date: "05.12.2024",
    language: "EN",
    title: "10 Essential Skills to Become an Expert Laravel Developer",
    excerpt: "Un retour structuré sur les compétences qui transforment la maîtrise d’un framework en vraie capacité d’ingénierie.",
    href: "https://seydinalimamoulayeyade.medium.com/10-essential-skills-to-become-an-expert-laravel-developer-d8846f8b7503",
  },
];

export const milestones: Milestone[] = [
  {
    date: "JUIL. 2026",
    title: "AWS Certified Cloud Practitioner — CLF-C02",
    description: "Fondamentaux AWS validés ; certification active jusqu’en juillet 2029.",
    category: "Certifications",
  },
  {
    date: "FÉV. → JUIL. 2026",
    title: "Orange Digital Center Sénégal — Cloud & DevOps",
    description: "Parcours intensif : cloud AWS, automatisation, conteneurs, CI/CD et exploitation.",
    category: "Formations",
  },
  {
    date: "JUIL. 2024 → JUIL. 2025",
    title: "Full Stack Developer & Technical Lead — Écoles Au Sénégal",
    description: "Développement produit, décisions d’architecture et accompagnement technique de l’équipe.",
    category: "Projets",
  },
  {
    date: "2024",
    title: "EDACY / Talent 4 Startups — Architecture logicielle",
    description: "Conception de systèmes maintenables, découpage applicatif et arbitrages techniques.",
    category: "Formations",
  },
  {
    date: "2023",
    title: "SOSEN Afrique",
    description: "Contribution à des produits numériques utiles, au croisement du développement et du terrain.",
    category: "Projets",
  },
];

export const skills = [
  { domain: "Cloud & Infra", index: "01", items: ["AWS", "Terraform", "Docker", "Kubernetes"] },
  { domain: "CI/CD", index: "02", items: ["Jenkins", "GitHub Actions", "GitLab CI"] },
  { domain: "Développement", index: "03", items: ["React", "Laravel", "TypeScript", "PostgreSQL"] },
  { domain: "Observabilité", index: "04", items: ["Prometheus", "Grafana", "SonarQube", "CloudWatch"] },
] as const;

export const navItems = [
  { id: "voyage", label: "Le voyage" },
  { id: "escales", label: "Escales" },
  { id: "carnets", label: "Carnets" },
  { id: "etapes", label: "Étapes" },
  { id: "competences", label: "Compétences" },
  { id: "contact", label: "Contact" },
] as const;
