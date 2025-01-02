# Configuration

## Fichiers de configuration

L'application utilise deux fichiers de configuration principaux :

- `src/config/config.ts` : Configuration de production
- `src/config/config.local.ts` : Configuration de développement

## Structure de la configuration

```typescript
interface Config {
  baseUrl: string;        // URL de base du site
  paths: {
    images: {
      menu: string;       // Chemin des images du menu
      dailySpecial: string; // Chemin des images du plat du jour
    };
    config: string;       // Dossier des configurations
    site: string;         // Dossier du site
  };
  deployment: {
    environment: 'local' | 'development' | 'staging' | 'production';
    outputDir?: string;   // Dossier de sortie (local)
    apiUrl?: string;      // URL de l'API (production)
  };
}
```

## Environnements

- `local` : Développement local
- `development` : Environnement de développement
- `staging` : Environnement de pré-production
- `production` : Environnement de production