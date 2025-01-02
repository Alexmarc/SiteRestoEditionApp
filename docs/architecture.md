# Architecture

## Structure du projet

```
src/
├── components/          # Composants React
│   ├── shared/         # Composants réutilisables
│   └── tabs/           # Composants des onglets
├── config/             # Configuration
├── data/              # Données par défaut
├── store/             # État global (Zustand)
├── types/             # Types TypeScript
└── utils/             # Utilitaires

public/
└── images/            # Images statiques
    ├── menu/          # Images du menu
    └── pdj/           # Images du plat du jour
```

## Technologies utilisées

- React 18
- TypeScript
- Tailwind CSS
- Zustand (gestion d'état)
- Vite (bundler)

## Gestion de l'état

L'application utilise Zustand pour la gestion de l'état global avec quatre stores principaux :
- Contact
- Menu
- Plat du jour
- Horaires