import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import AdminLayout from './layouts/AdminLayout/AdminLayout';

const JobManagement = lazy(() => import('./pages/JobManagment'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route index element={<Navigate to="job-management" replace />} />
            <Route path="job-management" element={<JobManagement />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
