import PermissionList from "./PermissionList";
import type { Role } from "@/types";

interface props {
  role: Role;
}
export default function RoleCard({ role }: props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Card Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-blue-700">{role.name}</h3>

          <p className="text-sm text-gray-500">
            Total users: <span className="font-medium">{role.users}</span>
          </p>
        </div>

        <button className="text-xl font-bold text-gray-400 hover:text-gray-700">
          ⋯
        </button>
      </div>

      <hr className="mb-3 border-gray-200" />

      <PermissionList permissions={role.permissions} />
    </div>
  );
}
