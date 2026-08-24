import { useState } from 'react';
import CheckInOutInputs from './CheckInOutInputs';
import type { Job } from '@/types';

type Props = {
  formData: Job;
  setFormData: React.Dispatch<React.SetStateAction<Job>>;
};

export default function JobScheduleForm({ formData, setFormData }: Props) {
  const [isFixed, setIsFixed] = useState(formData.scheduleType === 'fixed');

  function resetFixedSchedule() {
    setFormData((prev) => ({
      ...prev,
      fixedSchedule: {
        checkInFrom: '',
        checkInTo: '',
        checkOutFrom: '',
        checkOutTo: '',
        hoursPerDay: 0,
      },
    }));
  }

  return (
    <div className="text-sm flex flex-col gap-14">
      <div className="flex gap-20">
        <p className="text-primary-800">Schedule Type</p>
        <div className="flex gap-80">
          <label htmlFor="fixed" className="flex items-center gap-2">
            <input
              id="fixed"
              name="scheduleType"
              type="radio"
              className="appearance-none rounded-full w-8 h-8 border border-primary-900 checked:appearance-auto  accent-primary-800"
              checked={isFixed}
              onChange={() => {
                setIsFixed(true);
                setFormData({ ...formData, scheduleType: 'fixed' });
              }}
            />
            Fixed
          </label>
          <label htmlFor="shifts" className="flex items-center gap-2">
            <input
              id="shifts"
              name="scheduleType"
              type="radio"
              className="appearance-none rounded-full w-8 h-8 border border-primary-900 checked:appearance-auto  accent-primary-800"
              checked={isFixed === true ? false : true}
              onChange={() => {
                setIsFixed(false);
                setFormData({ ...formData, scheduleType: 'shifts' });
                resetFixedSchedule();
              }}
            />
            Shifts
          </label>
        </div>
      </div>
      {isFixed && (
        <div className="flex flex-col gap-16">
          <div className="flex gap-8 justify-between items-center">
            <p className="min-w-70">Check in</p>
            <CheckInOutInputs
              id="checkInFrom"
              inOrOut="in"
              fromOrTo="from"
              formData={formData}
              setFormData={setFormData}
            />
            <CheckInOutInputs
              id="checkInTo"
              inOrOut="in"
              fromOrTo="to"
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div className="flex gap-8 justify-between items-center">
            <p className="min-w-70">Check out</p>
            <CheckInOutInputs
              id="checkOutFrom"
              inOrOut="out"
              fromOrTo="from"
              formData={formData}
              setFormData={setFormData}
            />
            <CheckInOutInputs
              id="checkOutTo"
              inOrOut="out"
              fromOrTo="to"
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div className="flex items-center gap-8">
            <label htmlFor="hoursPerDay" className="min-w-100">
              Hours Per Day
            </label>
            <input
              id="hoursPerDay"
              type="number"
              value={formData.fixedSchedule?.hoursPerDay}
              className="py-6.5 px-8 bg-gray-100 rounded-md focus:outline-primary-400"
              required
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  fixedSchedule: {
                    ...prev.fixedSchedule!,
                    hoursPerDay: Number(e.target.value),
                  },
                }))
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
