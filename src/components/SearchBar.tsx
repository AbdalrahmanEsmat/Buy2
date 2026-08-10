import { useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import type { Dispatch, SetStateAction } from 'react';
import type { Job } from '../types';

type Props = {
  searchValue: string;
  setSearchValue: Dispatch<string>;
  jobs: Record<string, Job>;
  setSearchResult: Dispatch<SetStateAction<Record<string, Job>>>;
};

export default function SearchBar({
  searchValue,
  setSearchValue,
  jobs,
  setSearchResult,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);

    const result = Object.fromEntries(
      Object.entries(jobs).filter(([, job]) =>
        job.title.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );

    setSearchResult(result);
  }

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="flex flex-1 gap-8 h-full cursor-text items-center rounded-lg border border-gray-200 px-8 py-6"
    >
      <MagnifyingGlassIcon className="w-10 text-black" />

      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={handleOnChange}
        value={searchValue}
        className="h-full flex-1 text-xs outline-none placeholder:text-gray-400"
      />
    </div>
  );
}
