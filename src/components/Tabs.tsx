import React from 'react';
import { Tab } from '@headlessui/react';
import ContactTab from './tabs/ContactTab';
import MenuTab from './tabs/MenuTab';
import DailySpecialTab from './tabs/DailySpecialTab';
import ScheduleTab from './tabs/ScheduleTab';

const tabs = [
  { name: 'Contact', component: ContactTab },
  { name: 'Menu', component: MenuTab },
  { name: 'Plat du jour', component: DailySpecialTab },
  { name: 'Horaires', component: ScheduleTab },
];

export default function Tabs() {
  return (
    <Tab.Group>
      <div className="border-b border-gray-200">
        <Tab.List className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              className={({ selected }) =>
                `whitespace-nowrap py-4 px-2 border-b-2 font-medium text-sm outline-none
                ${selected
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="p-6">
        {tabs.map((tab, idx) => (
          <Tab.Panel
            key={idx}
            className="focus:outline-none"
          >
            <tab.component />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}