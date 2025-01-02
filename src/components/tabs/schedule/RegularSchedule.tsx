import { useConfigStore } from '../../../store/configStore';

const DAYS = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

export default function RegularSchedule() {
  const { schedule, setSchedule } = useConfigStore();

  const handleTimeChange = (day: string, period: 'midi' | 'soir', value: string) => {
    if (!schedule) return;
    
    setSchedule({
      ...schedule,
      regular: {
        ...schedule.regular,
        [day]: {
          ...schedule.regular[day],
          [period]: value
        }
      }
    });
  };

  if (!schedule) return null;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Horaires Réguliers</h2>
      <div className="space-y-3">
        {DAYS.map(day => (
          <div key={day} className="grid grid-cols-3 gap-4 items-center">
            <div className="capitalize">{day}</div>
            <div>
              <input
                type="text"
                value={schedule.regular[day].midi}
                onChange={(e) => handleTimeChange(day, 'midi', e.target.value)}
                placeholder="12:00-14:30"
                className="w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <input
                type="text"
                value={schedule.regular[day].soir}
                onChange={(e) => handleTimeChange(day, 'soir', e.target.value)}
                placeholder="19:00-22:30"
                className="w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}