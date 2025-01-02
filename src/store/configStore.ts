import { create } from 'zustand';
import { Contact, Schedule, Menu, DailySpecial } from '../types';
import { defaultContact, defaultMenu, defaultSchedule, defaultDailySpecial } from '../data/defaultData';

interface ConfigState {
  contact: Contact;
  schedule: Schedule;
  menu: Menu;
  dailySpecial: DailySpecial;
  setContact: (contact: Contact) => void;
  setSchedule: (schedule: Schedule) => void;
  setMenu: (menu: Menu) => void;
  setDailySpecial: (special: DailySpecial) => void;
}

export const useConfigStore = create<ConfigState>((set) => ({
  contact: defaultContact,
  schedule: defaultSchedule,
  menu: defaultMenu,
  dailySpecial: defaultDailySpecial,
  setContact: (contact) => set({ contact }),
  setSchedule: (schedule) => set({ schedule }),
  setMenu: (menu) => set({ menu }),
  setDailySpecial: (special) => set({ dailySpecial: special }),
}));