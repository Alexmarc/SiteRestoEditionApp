# Déploiement

## Configuration du déploiement

Le déploiement peut être configuré pour deux scénarios :

### 1. Déploiement local

Les fichiers sont générés directement dans le dossier public du site :

```typescript
deployment: {
  environment: 'local',
  outputDir: 'public/site'
}
```

### 2. Déploiement distant

Les fichiers sont envoyés à une API de déploiement :

```typescript
deployment: {
  environment: 'production',
  apiUrl: 'https://api.example.com'
}
```

## Processus de déploiement

1. Validation des données
2. Génération des fichiers
3. Optimisation des images
4. Déploiement des fichiers
5. Mise à jour du cache
6. Notification de fin de déploiement

## Rollback

En cas d'erreur, le système conserve les 5 dernières versions pour permettre un retour arrière rapide.