import { useConfigStore } from '../../../store/configStore';
import { MenuCategory as MenuCategoryType } from '../../../types';
import MenuItem from './MenuItem';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

interface Props {
  category: MenuCategoryType;
}

export default function MenuCategory({ category }: Props) {
  const { menu, setMenu } = useConfigStore();

  const updateCategory = (field: string, value: any) => {
    if (!menu) return;
    
    const newCategories = menu.categories.map(c => 
      c.id === category.id ? { ...c, [field]: value } : c
    );
    
    setMenu({ ...menu, categories: newCategories });
  };

  const addMenuItem = () => {
    if (!menu) return;
    
    const newItem = {
      id: `item-${Date.now()}`,
      name: 'Nouveau plat',
      description: '',
      price: 0,
      image: '',
      allergenes: []
    };
    
    const newCategories = menu.categories.map(c =>
      c.id === category.id
        ? { ...c, items: [...c.items, newItem] }
        : c
    );
    
    setMenu({ ...menu, categories: newCategories });
  };

  const deleteCategory = () => {
    if (!menu) return;
    
    const newCategories = menu.categories.filter(c => c.id !== category.id);
    setMenu({ ...menu, categories: newCategories });
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          value={category.name}
          onChange={(e) => updateCategory('name', e.target.value)}
          className="text-xl font-semibold bg-transparent border-none focus:ring-0"
        />
        <button
          onClick={deleteCategory}
          className="p-2 text-red-600 hover:text-red-800"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {category.items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            categoryId={category.id}
          />
        ))}
      </div>

      <button
        onClick={addMenuItem}
        className="mt-4 flex items-center text-blue-600 hover:text-blue-800"
      >
        <PlusIcon className="w-5 h-5 mr-1" />
        Ajouter un plat
      </button>
    </div>
  );
}