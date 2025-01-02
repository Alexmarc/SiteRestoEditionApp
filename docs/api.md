# API

## Points d'entrée

L'application communique avec le serveur via les endpoints suivants :

### Configuration

```typescript
GET /api/config
POST /api/config/deploy
```

### Images

```typescript
POST /api/upload/menu
POST /api/upload/daily-special
```

## Format des données

### Contact

```typescript
interface Contact {
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
```

### Menu

```typescript
interface Menu {
  categories: Array<{
    id: string;
    name: string;
    items: Array<{
      id: string;
      name: string;
      description: string;
      price: number;
      image: string;
      allergenes: string[];
    }>;
  }>;
}
```