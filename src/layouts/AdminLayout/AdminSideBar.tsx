import buy2Logo1 from '../../assets/images/buy2logo-1.png';
import buy2Logo2 from '../../assets/images/buy2logo-2.png';

import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/outline';

import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function AdminSideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { pathname } = useLocation();

  return (
    <aside
      className={`sticky top-8 bg-white flex flex-col  gap-8 py-16 h-screen rounded-2xl transition-[width] duration-300 ease-in-out ${isCollapsed ? 'w-[calc(88/16*1rem)]' : 'w-[calc(298/16*1rem)]'}`}
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
          <Bars3Icon className="h-12 w-12 text-primary-800" />
        </button>
      </div>

      {/* body  */}
      <ul>
        <li
          className={`sidebar-item ${pathname === '/job-management' ? 'sidebar-item-active' : ''}`}
        >
          <NavLink to="job-management" className="Link">
            <BriefcaseIcon
              className={`h-12 w-12 text-gray-400 ${pathname === '/job-management' ? 'fill-primary-900 ' : ''}`}
            />
            {!isCollapsed && (
              <p
                className={`text-gray-400 ${pathname === '/job-management' ? 'text-primary-900 font-semibold ' : ''}`}
              >
                Job Managment
              </p>
            )}
          </NavLink>
        </li>

        <li
          className={`sidebar-item ${pathname === '/role-management' ? 'sidebar-item-active' : ''}`}
        >
          <NavLink to="role-management" className="Link">
            <UserGroupIcon
              className={`h-12 w-12 text-gray-400 ${pathname === '/role-management' ? 'fill-primary-900 text-primary-900' : ''}`}
            />
            {!isCollapsed && (
              <p
                className={`text-gray-400 ${pathname === '/role-management' ? 'text-primary-900 font-semibold ' : ''}`}
              >
                Role Managment
              </p>
            )}
          </NavLink>
        </li>
      </ul>

      {/* logout button  */}
    </aside>
  );
}
