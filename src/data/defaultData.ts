export const defaultContact = {
  name: "Mon resto favoris",
  address: {
    street: "123 rue de la Gastronomie",
    city: "Azieu",
    postalCode: "69120"
  },
  phone: "+33 1 23 45 67 89",
  email: "contact@lemdazieu.fr",
  coordinates: {
    lat: 48.8566,
    lng: 2.3522
  },
  socialMedia: {
    facebook: "lemdazieu",
    instagram: "lem_azieu"
  }
};

export const defaultMenu = {
  categories: [
    {
      id: "entrees",
      name: "Entrées",
      items: [
        {
          id: "1",
          name: "Salade César",
          description: "Laitue romaine, croûtons, parmesan, sauce César maison",
          price: 12.50,
          image: "/images/entrees/cesar-salad.jpg",
          allergenes: ["gluten", "lactose", "œufs"]
        },
        {
          id: "2",
          name: "Salade CC",
          description: "Laitue romaine, chèvre chaud",
          price: 12.50,
          image: "/images/entrees/cesar-cc.jpg",
          allergenes: ["gluten", "lactose", "œufs"]
        }
      ]
    }
  ]
};

export const defaultSchedule = {
  regular: {
    lundi: { midi: "12:00-14:30", soir: "19:00-22:30" },
    mardi: { midi: "12:00-14:30", soir: "19:00-22:30" },
    mercredi: { midi: "12:00-14:30", soir: "19:00-22:30" },
    jeudi: { midi: "12:00-14:30", soir: "19:00-22:30" },
    vendredi: { midi: "12:00-14:30", soir: "19:00-23:00" },
    samedi: { midi: "12:00-15:00", soir: "19:00-23:00" },
    dimanche: { midi: "12:00-15:00", soir: "fermé" }
  },
  special: []
};

export const defaultDailySpecial = {
  title: "Filet de Bar rôti",
  description: "Filet de bar rôti aux herbes de Provence, purée de pommes de terre à l'huile d'olive et légumes de saison",
  price: 24.90,
  image: "/images/pdj/daily-special.jpg",
  enablePicture: true,
  date: new Date().toISOString().split('T')[0],
  chef: "Chef Jean Martin",
  calories: 650,
  vegetarien: false,
  disponible: true
};