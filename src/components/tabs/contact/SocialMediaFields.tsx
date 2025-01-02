import React from 'react';
import Input from '../../shared/Input';
import { Contact } from '../../../types';

interface Props {
  socialMedia: Contact['socialMedia'];
  onChange: (field: string, value: string) => void;
}

export default function SocialMediaFields({ socialMedia, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-900">Réseaux sociaux</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Facebook"
          value={socialMedia.facebook}
          onChange={(e) => onChange('socialMedia.facebook', e.target.value)}
          placeholder="@votrepage"
        />
        <Input
          label="Instagram"
          value={socialMedia.instagram}
          onChange={(e) => onChange('socialMedia.instagram', e.target.value)}
          placeholder="@votrecompte"
        />
      </div>
    </div>
  );
}