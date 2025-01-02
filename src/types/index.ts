export interface Contact {
  name: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
  };
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
  };
}

export interface Schedule {
  regular: {
    [key: string]: {
      midi: string;
      soir: string;
    };
  };
  special: Array<{
    date: string;
    midi: string;
    soir: string;
  }>;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  allergenes: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Menu {
  categories: MenuCategory[];
}

export interface DailySpecial {
  title: string;
  description: string;
  price: number;
  image: string;
  enablePicture: boolean;
  date: string;
  chef: string;
  calories: number;
  vegetarien: boolean;
  disponible: boolean;
}