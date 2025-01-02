import React from 'react';
import { useConfigStore } from '../../store/configStore';
import DeployButton from '../DeployButton';
import MenuCategory from './menu/MenuCategory';
import { PlusIcon } from '@heroicons/react/24/outline';
import { MenuCategory as MenuCategoryType } from '../../types';

export default function MenuTab() {
  const { menu, setMenu } = useConfigStore();

  const addCategory = () => {
    const newCategory: MenuCategoryType = {
      id: `category-${Date.now()}`,
      name: 'Nouvelle catégorie',
      items: []
    };
    
    setMenu({
      ...menu,
      categories: [...menu.categories, newCategory]
    });
  };

  return (
    <div className="space-y-6">
      {menu.categories.map((category) => (
        <MenuCategory key={category.id} category={category} />
      ))}
      
      <button
        onClick={addCategory}
        className="flex items-center text-blue-600 hover:text-blue-800"
      >
        <PlusIcon className="w-5 h-5 mr-1" />
        Ajouter une catégorie
      </button>

      <div className="mt-4">
        <DeployButton />
      </div>
    </div>
  );
}