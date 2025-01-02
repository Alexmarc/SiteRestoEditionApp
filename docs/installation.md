# Installation

## Prérequis

- Node.js 16.x ou supérieur
- npm 7.x ou supérieur

## Installation dans un site existant

1. Créez un dossier `configuration` dans votre projet :
```bash
mkdir configuration
cd configuration
```

2. Clonez l'application :
```bash
git clone [URL_DU_REPO] .
```

3. Installez les dépendances :
```bash
npm install
```

4. Configurez l'application :
   - Copiez `src/config/config.local.ts.example` vers `src/config/config.local.ts`
   - Modifiez les paramètres selon votre environnement

5. Construisez l'application :
```bash
npm run build
```

6. Intégrez dans votre site web :
   - Copiez le contenu de `dist/configuration` dans le dossier correspondant de votre site
   - Configurez votre serveur web pour servir l'application sur `/configuration`