export const config = {
  // URL de base de votre site web
  baseUrl: 'https://lemdazieu.fr',
  
  // Chemins des ressources
  paths: {
    images: {
      menu: '/images/menu',
      dailySpecial: '/images/pdj',
    },
  },
  
  // Configuration du déploiement
  deployment: {
    // Environnement (development, staging, production)
    environment: 'development',
    
    // URL de l'API de déploiement
    apiUrl: 'https://api.lemdazieu.fr',
  },
};

export default config;