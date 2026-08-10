import SearchBar from '../components/SearchBar';
import JobActions from '../features/jobManagement/JobActions';

export default function JobManagement() {
  return (
    <div className="bg-white rounded-2xl">
      <div className="flex gap-8 h-24">
        <SearchBar />
        <JobActions />
      </div>
    </div>
  );
}
