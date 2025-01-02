import React from 'react';
import Input from '../../shared/Input';
import { Contact } from '../../../types';

interface Props {
  address: Contact['address'];
  onChange: (field: string, value: string) => void;
}

export default function AddressFields({ address, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-900">Adresse</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Input
            label="Rue"
            value={address.street}
            onChange={(e) => onChange('address.street', e.target.value)}
          />
        </div>
        <Input
          label="Ville"
          value={address.city}
          onChange={(e) => onChange('address.city', e.target.value)}
        />
        <Input
          label="Code postal"
          value={address.postalCode}
          onChange={(e) => onChange('address.postalCode', e.target.value)}
        />
      </div>
    </div>
  );
}