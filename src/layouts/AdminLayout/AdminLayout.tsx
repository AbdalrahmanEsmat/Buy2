import { Outlet } from 'react-router-dom';
import AdminSideBar from './AdminSideBar';

export default function AdminLayout() {
  return (
    <div className="flex gap-12 h-screen p-8">
      <AdminSideBar />
      <main className="flex-1 bg-white rounded-2xl">
        <Outlet />
      </main>
    </div>
  );
}
