import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import RoleManagement from './pages/RoleManagement';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import JobDetails from './features/jobManagement/JobDetails';
import JobInformation from './features/jobManagement/JobInformation';
import JobEmployees from './features/jobManagement/JobEmployees';
import EmployeeProfile from './features/employeeManagement/employeeProfile';

const JobManagement = lazy(() => import('./pages/JobManagment'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, //5 min
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<AdminLayout />}>
              <Route index element={<Navigate to="job-management" replace />} />
              <Route path="job-management" element={<JobManagement />} />
              <Route path="job-management/:jobId" element={<JobDetails />}>
                <Route
                  index
                  element={<Navigate to="job-information" replace />}
                />
                <Route path="job-information" element={<JobInformation />} />
                <Route path="job-employees" element={<JobEmployees />} />
              </Route>
              <Route
                path="job-management/:jobId/job-employees/:employeeId"
                element={<EmployeeProfile />}
              />
              <Route path="role-management" element={<RoleManagement />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
