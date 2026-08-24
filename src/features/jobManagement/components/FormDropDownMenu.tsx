import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import type {
  Department,
  Employee,
  Job,
  Qualification,
  SeniorityLevel,
} from '../../../types';
import { useOutsideClick } from '@/hooks/useOutsideClick';

type SearchableSelectName =
  | 'departmentId'
  | 'seniorityLevelId'
  | 'qualificationIds'
  | 'reportingManagerId';

type Props = {
  name: SearchableSelectName;
  labelText: string;
  placeHolder: string;
  list: (Department | Qualification | SeniorityLevel | Employee)[] | undefined;
  chioceType: 'single' | 'multiple';
  searchPlaceHolder: string;
  formData: Job;
  setFormData: React.Dispatch<React.SetStateAction<Job>>;
};

export default function FormDropDownMenu({
  name,
  labelText,
  placeHolder,
  list,
  chioceType,
  searchPlaceHolder,
  formData,
  setFormData,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchbarValue, setSearchbarvalue] = useState('');
  const [searchResult, setSearchResult] = useState<
    (Department | Qualification | SeniorityLevel | Employee)[] | undefined
  >([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const menuRef = useOutsideClick(() => setIsOpen(false));

  if (!list) {
    return <p>no options to choose from</p>;
  }

  const property = formData[name];
  let chioce;
  if (chioceType === 'single') {
    chioce = list.find((item) => item.id === property)?.name;
  } else {
    chioce = list
      .filter((item) => property.includes(item.id))
      .map((item) => item.name);
  }

  let toBeShowen;
  function handleSearchbarChange(value: string) {
    setSearchbarvalue(value);
    const res = list?.filter((item) => item.name.toLowerCase().includes(value));
    setSearchResult(res);
  }

  if (searchResult!.length > 0) toBeShowen = searchResult;
  else toBeShowen = list;

  return (
    <div ref={menuRef} className="relative">
      <div
        className="flex flex-col gap-5"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="cursor-pointer">{labelText}</p>
        <div className="flex justify-between items-center p-8 border border-gray-200 rounded-lg text-gray-400 text-sm">
          <span>
            {chioceType === 'single'
              ? chioce || placeHolder
              : Array.isArray(chioce) && chioce.length > 0
                ? chioce.join(', ')
                : placeHolder}
          </span>
          {isOpen ? (
            <ChevronUpIcon className="w-9 stroke-3 text-primary-900" />
          ) : (
            <ChevronDownIcon className="w-9 stroke-3 text-primary-900" />
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="flex flex-col mb-5 absolute w-full z-10 top-49 max-h-158.5 p-8 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg border border-gray-200 bg-white"
          onClick={() => searchInputRef.current?.focus()}
        >
          <div className="flex items-center gap-4 mb-8 mx-auto w-[90%] h-24 bg-gray-100 py-6 px-8 rounded-3xl">
            <MagnifyingGlassIcon className="w-8 text-gray-400" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder={`Search for ${searchPlaceHolder}`}
              className="focus:outline-0"
              value={searchbarValue}
              onChange={(e) => handleSearchbarChange(e.target.value)}
            />
          </div>

          {searchResult!.length === 0 && searchbarValue.length > 0 ? (
            <p className="capitalize m-auto">no results found</p>
          ) : (
            toBeShowen!.map((item) => (
              <label
                key={item.id}
                className="flex justify-between items-center px-15 py-4 cursor-pointer rounded-lg hover:bg-gray-50"
                htmlFor={`${item.id}`}
              >
                {item.name}

                <input
                  type={chioceType === 'single' ? 'radio' : 'checkbox'}
                  id={`${item.id}`}
                  name={name}
                  value={item.id}
                  checked={
                    chioceType === 'single'
                      ? property === item.id
                      : Array.isArray(property) && property.includes(item.id)
                  }
                  className={`${chioceType === 'single' ? 'rounded-full' : 'rounded-none'} appearance-none w-6 h-6 border border-primary-900 checked:appearance-auto  accent-primary-900`}
                  onClick={
                    chioceType === 'single' ? () => setIsOpen(false) : undefined
                  }
                  onChange={(e) => {
                    setFormData((prev) => {
                      if (chioceType === 'single') {
                        return {
                          ...prev,
                          [name]: item.id,
                        };
                      }

                      const currentChoices = prev[name];

                      if (!Array.isArray(currentChoices)) {
                        return prev;
                      }

                      return {
                        ...prev,
                        [name]: e.target.checked
                          ? [...currentChoices, item.id]
                          : currentChoices.filter((id) => id !== item.id),
                      };
                    });
                  }}
                />
              </label>
            ))
          )}
        </div>
      )}
    </div>
  );
}
