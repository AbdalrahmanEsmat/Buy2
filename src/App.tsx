import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import RoleManagement from './pages/RoleManagement';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
              <Route path="role-management" element={<RoleManagement />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
