import React from 'react';
import { useConfigStore } from '../../store/configStore';
import DeployButton from '../DeployButton';
import RegularSchedule from './schedule/RegularSchedule';
import SpecialSchedule from './schedule/SpecialSchedule';

export default function ScheduleTab() {
  const { schedule } = useConfigStore();

  return (
    <div className="space-y-6">
      <RegularSchedule />
      <SpecialSchedule />
      <div className="mt-4">
        <DeployButton />
      </div>
    </div>
  );
}