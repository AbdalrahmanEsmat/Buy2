import { useState } from 'react';
import { PanelLeft } from 'lucide-react';
import buy2Logo1 from '../../assets/images/buy2logo-1.png';
import buy2Logo2 from '../../assets/images/buy2logo-2.png';
import { NavLink } from 'react-router-dom';

export default function AdminSideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`bg-white flex flex-col  gap-8 py-16 h-full rounded-2xl transition-[width] duration-300 ease-in-out ${isCollapsed ? 'w-[calc(88/16*1rem)]' : 'w-[calc(298/16*1rem)]'}`}
    >
      {/* header  */}
      <div
        className={`flex   ${isCollapsed ? 'flex-col items-center gap-16' : 'px-16 items-end justify-between'}`}
      >
        {isCollapsed ? (
          <img
            src={buy2Logo2}
            alt="buy2 logo"
            className="w-w-[calc(42.55 / 16 * 1rem)]"
          />
        ) : (
          <img src={buy2Logo1} alt="buy2 logo" />
        )}

        <button
          className={`cursor-pointer ${isCollapsed ? 'border-y border-gray-200 py-2' : ''}`}
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          <PanelLeft size={24} className="text-primary-800" />
        </button>
      </div>

      {/* body  */}

      <ul>
        <li>
          <NavLink to="job-management">Job Managment</NavLink>
        </li>
      </ul>
    </aside>
  );
}
