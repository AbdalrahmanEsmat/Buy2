import { Outlet } from 'react-router-dom';
import AdminSideBar from './AdminSideBar';

export default function AdminLayout() {
  return (
    <div className="flex gap-12 p-8 relative">
      <AdminSideBar />
      <main className="flex-1 bg-white rounded-2xl p-8">
        <Outlet />
      </main>
    </div>
  );
}
