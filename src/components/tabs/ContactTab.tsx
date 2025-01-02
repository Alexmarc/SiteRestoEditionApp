import React from 'react';
import { useConfigStore } from '../../store/configStore';
import DeployButton from '../DeployButton';
import Input from '../shared/Input';
import AddressFields from './contact/AddressFields';
import CoordinatesFields from './contact/CoordinatesFields';
import SocialMediaFields from './contact/SocialMediaFields';

export default function ContactTab() {
  const { contact, setContact } = useConfigStore();

  const handleChange = (field: string, value: any) => {
    const newContact = { ...contact };
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      (newContact as any)[parent][child] = value;
    } else {
      (newContact as any)[field] = value;
    }
    setContact(newContact);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Nom du restaurant"
          value={contact.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          value={contact.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <Input
          label="Téléphone"
          type="tel"
          value={contact.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="+33 1 23 45 67 89"
        />
      </div>

      <AddressFields 
        address={contact.address}
        onChange={handleChange}
      />

      <CoordinatesFields 
        coordinates={contact.coordinates}
        onChange={handleChange}
      />

      <SocialMediaFields 
        socialMedia={contact.socialMedia}
        onChange={handleChange}
      />
      
      <div className="pt-4">
        <DeployButton />
      </div>
    </div>
  );
}