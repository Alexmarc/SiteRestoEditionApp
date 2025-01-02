import { useConfigStore } from '../../../store/configStore';
import { MenuItem as MenuItemType } from '../../../types';
import ImageUpload from '../../shared/ImageUpload';
import { TrashIcon } from '@heroicons/react/24/outline';

interface Props {
  item: MenuItemType;
  categoryId: string;
}

export default function MenuItem({ item, categoryId }: Props) {
  const { menu, setMenu } = useConfigStore();

  const updateItem = (field: string, value: any) => {
    if (!menu) return;
    
    const newCategories = menu.categories.map(category =>
      category.id === categoryId
        ? {
            ...category,
            items: category.items.map(i =>
              i.id === item.id
                ? { ...i, [field]: value }
                : i
            )
          }
        : category
    );
    
    setMenu({ ...menu, categories: newCategories });
  };

  const deleteItem = () => {
    if (!menu) return;
    
    const newCategories = menu.categories.map(category =>
      category.id === categoryId
        ? {
            ...category,
            items: category.items.filter(i => i.id !== item.id)
          }
        : category
    );
    
    setMenu({ ...menu, categories: newCategories });
  };

  return (
    <div className="border rounded p-4">
      <div className="flex justify-between">
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              value={item.name}
              onChange={(e) => updateItem('name', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Prix</label>
            <input
              type="number"
              value={item.price}
              onChange={(e) => updateItem('price', parseFloat(e.target.value))}
              step="0.10"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={item.description}
              onChange={(e) => updateItem('description', e.target.value)}
              rows={2}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Allergènes</label>
            <input
              type="text"
              value={item.allergenes.join(', ')}
              onChange={(e) => updateItem('allergenes', e.target.value.split(',').map(a => a.trim()))}
              placeholder="gluten, lactose, ..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          
          <div className="col-span-2">
            <ImageUpload
              currentImage={item.image}
              onUpload={(path) => updateItem('image', path)}
              folder="menu"
            />
          </div>
        </div>
        
        <button
          onClick={deleteItem}
          className="ml-4 p-2 text-red-600 hover:text-red-800 h-fit"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}