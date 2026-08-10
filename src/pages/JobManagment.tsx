import SearchBar from '../components/SearchBar';
import JobActions from '../features/jobManagement/JobActions';
import JobTable from '../features/jobManagement/JobTable';

export default function JobManagement() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8 h-24">
        <SearchBar />
        <JobActions />
      </div>
      <hr className="border-gray-200" />
      <JobTable />
    </div>
  );
}
