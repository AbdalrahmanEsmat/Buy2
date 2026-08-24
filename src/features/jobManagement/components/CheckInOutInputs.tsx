import { useOutsideClick } from '@/hooks/useOutsideClick';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import type { Job } from '@/types';

type id = string;
type timeField = 'checkInFrom' | 'checkInTo' | 'checkOutFrom' | 'checkOutTo';
type fromOrTo = 'from' | 'to';
type inOrOut = 'in' | 'out';
type formData = Job;
type setFormData = React.Dispatch<React.SetStateAction<Job>>;

export default function CheckInOutInputs({
  id,
  inOrOut,
  fromOrTo,
  formData,
  setFormData,
}: {
  id: id;
  inOrOut: inOrOut;
  fromOrTo: fromOrTo;
  formData: formData;
  setFormData: setFormData;
}) {
  const [inputValue, setInputValue] = useState(
    inOrOut === 'in'
      ? fromOrTo === 'from'
        ? formData.fixedSchedule?.checkInFrom
        : formData.fixedSchedule?.checkInTo
      : fromOrTo === 'from'
        ? formData.fixedSchedule?.checkOutFrom
        : formData.fixedSchedule?.checkOutTo,
  );
  const [timePeriod, setTimePeriod] = useState('AM');
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const timePeriodMenuRef = useOutsideClick(() => setIsDropDownOpen(false));

  const inOROutCapitalized = inOrOut[0].toUpperCase() + inOrOut.slice(1);
  const fromOrToCapitalized = fromOrTo[0].toUpperCase() + fromOrTo.slice(1);
  const filed = `check${inOROutCapitalized}${fromOrToCapitalized}` as timeField;

  function handleInputChange(value: string) {
    if (value.length > 5) return;

    // Only numbers and :
    if (!/^[0-9:]*$/.test(value)) return;

    // First digit: 0 or 1
    if (value.length === 1 && !/^[01]$/.test(value[0])) return;

    // Second digit depends on first digit
    if (value.length === 2) {
      if (value[0] === '0' && !/^[1-9]$/.test(value[1])) return;
      if (value[0] === '1' && !/^[0-2]$/.test(value[1])) return;
    }

    // Third character: :
    if (value.length === 3 && value[2] !== ':') return;

    // Fourth digit: 0-5
    if (value.length === 4 && !/^[0-5]$/.test(value[3])) return;

    // Fifth digit: 0-9
    if (value.length === 5 && !/^[0-9]$/.test(value[4])) return;

    setInputValue(value);

    if (value.length === 5) {
      setFormData((prev) => ({
        ...prev,
        fixedSchedule: {
          ...prev.fixedSchedule!,
          [filed]: `${value} ${timePeriod}`,
        },
      }));
    }
  }

  function handleTimePeriodClick(amOrPm: string) {
    setFormData((prev) => ({
      ...prev,
      fixedSchedule: {
        ...prev.fixedSchedule!,
        [filed]: `${inputValue} ${amOrPm}`,
      },
    }));
    setTimePeriod(amOrPm);
  }

  return (
    <div className="flex items-center">
      <label htmlFor={id} className="mr-8">
        {fromOrTo}
      </label>
      <div className="flex gap-2 h-22">
        {/* //////////////////////////////////////// */}
        <input
          id={id}
          type="text"
          value={inputValue}
          placeholder="HH:MM"
          maxLength={5}
          className="py-6.5 px-8 bg-gray-100 rounded-md focus:outline-primary-400"
          required
          onChange={(e) => handleInputChange(e.target.value)}
        />

        {/* //////////////////////////////////////// */}
        <div
          className="relative flex items-center gap-2 bg-gray-100 rounded-md px-5 focus:outline-primary-400"
          onClick={() => setIsDropDownOpen((prev) => !prev)}
        >
          <p>{timePeriod}</p>
          {isDropDownOpen ? (
            <ChevronUpIcon className="w-8 h-8 text-primary-800" />
          ) : (
            <ChevronDownIcon className="w-8 h-8 text-primary-800" />
          )}
          {isDropDownOpen && (
            <div
              ref={timePeriodMenuRef}
              className="absolute top-25 left-0 z-10 bg-gray-100 w-full py-5 rounded-md"
            >
              <p
                className="py-5 text-center hover:bg-gray-200"
                onClick={() => {
                  handleTimePeriodClick('AM');
                }}
              >
                AM
              </p>
              <p
                className="py-5 text-center hover:bg-gray-200"
                onClick={() => {
                  handleTimePeriodClick('PM');
                }}
              >
                PM
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
