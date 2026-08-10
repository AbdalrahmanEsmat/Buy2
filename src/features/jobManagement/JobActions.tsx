import {
  ArrowsUpDownIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

export default function JobActions() {
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
      <button
        type="button"
        className="flex gap-4 h-full  w-45 items-center rounded-lg border border-gray-200 px-8 text-xs font-medium text-black"
      >
        <AdjustmentsHorizontalIcon className="w-9" />
        <span>Filter</span>
      </button>

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
