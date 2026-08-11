import { useState, type Dispatch } from 'react';
import { useDepartments } from '../departmentManagement/useDepartments';
import { useSearchParams } from 'react-router-dom';
import {
  ArrowsUpDownIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import Loader from '../../components/Loader';
import { useOutsideClick } from '../../hooks/useOutsideClick';

type Props = {
  setSearchValue: Dispatch<string>;
};

export default function JobActions({ setSearchValue }: Props) {
  const { departments, isPending, isError } = useDepartments();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const ref = useOutsideClick(() => setIsFilterOpen(false));

  //////////////////////
  if (isPending) return <Loader />;
  if (isError) throw new Error('could not fetch the departments');
  //////////////////////

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
      <div ref={ref} className="relative h-full">
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
            <button
              key="all"
              type="button"
              className="w-full px-6 py-4 text-left text-sm text-black hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                searchParams.delete('department');
                searchParams.delete('page');
                setSearchParams(searchParams);
                setIsFilterOpen(false);
                setSearchValue('');
              }}
            >
              All
            </button>
            {Object.values(departments!).map((department) => (
              <button
                key={department.id}
                type="button"
                className="w-full px-6 py-4 text-left text-sm text-black hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  searchParams.set('department', department.id);
                  searchParams.delete('page');
                  setSearchParams(searchParams);
                  setIsFilterOpen(false);
                  setSearchValue('');
                }}
              >
                {department.name}
              </button>
            ))}
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
