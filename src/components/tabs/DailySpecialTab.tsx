import React from 'react';
import { useConfigStore } from '../../store/configStore';
import DeployButton from '../DeployButton';
import ImageUpload from '../shared/ImageUpload';

export default function DailySpecialTab() {
  const { dailySpecial, setDailySpecial } = useConfigStore();

  const handleChange = (field: string, value: any) => {
    setDailySpecial({ ...dailySpecial, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Titre</label>
          <input
            type="text"
            value={dailySpecial.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Prix</label>
          <input
            type="number"
            value={dailySpecial.price}
            onChange={(e) => handleChange('price', parseFloat(e.target.value))}
            step="0.10"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={dailySpecial.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        
        <div className="col-span-2">
          <ImageUpload
            currentImage={dailySpecial.image}
            onUpload={(path) => handleChange('image', path)}
            folder="pdj"
            filename="daily-special"
          />
        </div>
      </div>

      <div className="mt-4">
        <DeployButton />
      </div>
    </div>
  );
}