# Virtual Voyager — Portfolio

Portfolio one-page de **Seydina Limamou Laye Yade**, Cloud & DevOps Engineer à Dakar. Une expérience éditoriale « Terminal Odyssey » qui raconte le passage du développement full stack à l’ingénierie cloud.

> Emplacement recommandé pour une capture ou un GIF de démonstration.

## Stack

- Next.js 16 — App Router
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Déploiement Vercel

## Fonctionnalités

- Sept chapitres visuellement distincts et animations déclenchées au scroll
- Thèmes sombre et clair chaud persistés localement
- Palette de commandes `Cmd/Ctrl + K`
- Projets publics, diagramme serverless animé et articles Medium
- Parcours antéchronologique filtrable
- SEO complet, Open Graph dynamique et navigation accessible

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez `http://localhost:3000`. Pour une validation complète :

```bash
npm run lint
npm run typecheck
npm run build
```

## Configuration

Copiez `.env.example` vers `.env.local`, puis renseignez l’URL publique :

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.example
```

## Déploiement Vercel

1. Importez le dépôt dans Vercel.
2. Ajoutez `NEXT_PUBLIC_SITE_URL` aux variables d’environnement.
3. Déployez avec les réglages Next.js détectés automatiquement.

Aucun secret applicatif n’est requis. Ne commitez jamais `.env.local`.

## Liens de contenu

Les destinations des projets et articles sont centralisées dans `data/portfolio.fr.ts`. Cette structure sépare le contenu français de la présentation et permet l’ajout ultérieur de `portfolio.en.ts`.

## Licence

MIT — voir [LICENSE](./LICENSE).

## Topics GitHub suggérés

`portfolio`, `nextjs`, `typescript`, `tailwindcss`, `framer-motion`, `devops`, `cloud`, `aws`, `terraform`, `vercel`, `senegal`
