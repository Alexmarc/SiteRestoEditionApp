import { format } from 'date-fns';

export const createArchiveName = (siteName: string, countryCode: string) => {
  const timestamp = format(new Date(), "yyyy_MM_dd_HH_mm_ss_'GMT'");
  return `archive_${siteName}_${countryCode}_${timestamp}.zip`;
};

export const createDailySpecialArchiveName = (counter: number) => {
  return `archive_pdj_${String(counter).padStart(5, '0')}`;
};