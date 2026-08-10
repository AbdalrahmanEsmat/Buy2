import { useState } from 'react';
import Loader from '../components/Loader';
import SearchBar from '../components/SearchBar';
import JobActions from '../features/jobManagement/JobActions';
import JobTable from '../features/jobManagement/JobTable';
import { useJobs } from '../features/jobManagement/useJobs';
import type { Job } from '../types';

export default function JobManagement() {
  const { jobs, isPending, isError } = useJobs();
  const [searcValue, setSearchValue] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Record<string, Job>>({});

  //////////////////////
  if (isPending) return <Loader />;
  if (isError) throw new Error('could not fetch the jobs');
  //////////////////////

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8 h-24">
        <SearchBar
          searchValue={searcValue}
          setSearchValue={setSearchValue}
          jobs={jobs!}
          setSearchResult={setSearchResult}
        />
        <JobActions setSearchValue={setSearchValue} />
      </div>
      <hr className="border-gray-200" />
      <JobTable
        searchValue={searcValue}
        searchResult={searchResult}
        jobs={jobs!}
      />
    </div>
  );
}
