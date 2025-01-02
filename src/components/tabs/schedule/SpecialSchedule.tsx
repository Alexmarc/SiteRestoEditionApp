import { useConfigStore } from '../../../store/configStore';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function SpecialSchedule() {
  const { schedule, setSchedule } = useConfigStore();

  const addSpecialDate = () => {
    if (!schedule) return;
    
    setSchedule({
      ...schedule,
      special: [
        ...schedule.special,
        { date: '', midi: '', soir: '' }
      ]
    });
  };

  const removeSpecialDate = (index: number) => {
    if (!schedule) return;
    
    const newSpecial = [...schedule.special];
    newSpecial.splice(index, 1);
    setSchedule({ ...schedule, special: newSpecial });
  };

  const updateSpecialDate = (index: number, field: string, value: string) => {
    if (!schedule) return;
    
    const newSpecial = [...schedule.special];
    newSpecial[index] = { ...newSpecial[index], [field]: value };
    setSchedule({ ...schedule, special: newSpecial });
  };

  if (!schedule) return null;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Horaires Spéciaux</h2>
      <div className="space-y-3">
        {schedule.special.map((special, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 items-center">
            <input
              type="date"
              value={special.date}
              onChange={(e) => updateSpecialDate(index, 'date', e.target.value)}
              className="rounded-md border-gray-300 shadow-sm"
            />
            <input
              type="text"
              value={special.midi}
              onChange={(e) => updateSpecialDate(index, 'midi', e.target.value)}
              placeholder="12:00-14:30"
              className="rounded-md border-gray-300 shadow-sm"
            />
            <input
              type="text"
              value={special.soir}
              onChange={(e) => updateSpecialDate(index, 'soir', e.target.value)}
              placeholder="19:00-22:30"
              className="rounded-md border-gray-300 shadow-sm"
            />
            <button
              onClick={() => removeSpecialDate(index)}
              className="p-2 text-red-600 hover:text-red-800"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={addSpecialDate}
        className="mt-4 flex items-center text-blue-600 hover:text-blue-800"
      >
        <PlusIcon className="w-5 h-5 mr-1" />
        Ajouter une date spéciale
      </button>
    </div>
  );
}