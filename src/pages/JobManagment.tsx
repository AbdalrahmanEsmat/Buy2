import SearchBar from '../components/SearchBar';
import JobManagementActions from '../features/jobManagement/JobManagementActions';

export default function JobManagement() {
  return (
    <div className="bg-white rounded-2xl">
      <div className="flex gap-8 h-24">
        <SearchBar />
        <JobManagementActions />
      </div>
    </div>
  );
}
