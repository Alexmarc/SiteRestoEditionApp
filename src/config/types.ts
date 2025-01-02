export interface Config {
  baseUrl: string;
  paths: {
    images: {
      menu: string;
      dailySpecial: string;
    };
    config: string;
    site: string;
  };
  deployment: {
    environment: 'local' | 'development' | 'staging' | 'production';
    outputDir?: string;
    apiUrl?: string;
  };
}