import { useState } from 'react';
import {
  ArrowsUpDownIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

export default function JobActions() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex h-full items-center gap-8">
      {/* Sort */}
      <button
        type="button"
        className="flex gap-4 h-full  w-45 items-center rounded-lg border border-gray-200 px-8 text-xs font-medium text-black"
      >
        <ArrowsUpDownIcon className="w-9" />
        <span>Sort</span>
      </button>

      {/* Filter */}
      <div className="relative h-full">
        <button
          type="button"
          onClick={() => setIsFilterOpen((open) => !open)}
          className="flex gap-4 h-full  w-45 items-center rounded-lg border border-gray-200 px-8 text-xs font-medium text-black cursor-pointer"
        >
          <AdjustmentsHorizontalIcon className="w-9" />
          <span>Filter</span>
        </button>
        {isFilterOpen && (
          <div className="absolute left-0 top-full z-50 mt-2 w-56 max-h-64 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
            {/* options */}
          </div>
        )}
      </div>
      {/* Create */}
      <button
        type="button"
        className="w-95 h-full rounded-lg bg-[#243F9B] px-12 text-xs font-medium text-white"
      >
        Create a New Job
      </button>
    </div>
  );
}
