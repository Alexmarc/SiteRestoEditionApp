import localConfig from './config.local';
import prodConfig from './config';

// Utilise la configuration locale si on est en développement
const config = import.meta.env.DEV ? localConfig : prodConfig;

export default config;