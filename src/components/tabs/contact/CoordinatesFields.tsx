import React from 'react';
import Input from '../../shared/Input';
import { Contact } from '../../../types';

interface Props {
  coordinates: Contact['coordinates'];
  onChange: (field: string, value: number) => void;
}

export default function CoordinatesFields({ coordinates, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-900">Coordonnées GPS</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Latitude"
          type="number"
          step="any"
          value={coordinates.lat}
          onChange={(e) => onChange('coordinates.lat', parseFloat(e.target.value))}
        />
        <Input
          label="Longitude"
          type="number"
          step="any"
          value={coordinates.lng}
          onChange={(e) => onChange('coordinates.lng', parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
}