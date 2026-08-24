import { useState } from 'react';
import Loader from '../components/Loader';
import JobsSearchBar from '../features/jobManagement/components/JobsSearchBar';
import JobActions from '../features/jobManagement/components/JobActions';
import JobTable from '../features/jobManagement/components/JobTable';
import { useJobs } from '../features/jobManagement/useJobs';
import type { Job } from '../types';
import PageContainer from '../components/PageContainer';

export default function JobManagement() {
  const { jobs, isPending, error } = useJobs();
  const [searcValue, setSearchValue] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  //////////////////////
  if (isPending) return <Loader />;
  if (error) throw new Error(error.message);
  if (!jobs) throw new Error('Jobs not foound');
  //////////////////////

  return (
    <PageContainer className="flex flex-col gap-8">
      <div className="flex gap-8 h-24">
        <JobsSearchBar
          searchValue={searcValue}
          setSearchValue={setSearchValue}
          jobs={jobs}
          setSearchResult={setSearchResult}
          setCurrentPage={setCurrentPage}
        />
        <JobActions setSearchValue={setSearchValue} />
      </div>
      <hr className="border-gray-200" />
      <JobTable
        searchValue={searcValue}
        searchResult={searchResult}
        jobs={jobs}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </PageContainer>
  );
}
