import { useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

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
        className="h-full flex-1 text-xs outline-none placeholder:text-gray-400"
      />
    </div>
  );
}
