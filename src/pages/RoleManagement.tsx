import { roles } from "@/mocks/db1";

export default function RoleManagement() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Role Based</h2>

        <button className="rounded-lg bg-blue-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
          Create New Role
        </button>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
        {roles.map((role) => (
          <div
            key={role.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            {/* Card Header */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-700">
                  {role.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Total users: <span className="font-medium">{role.users}</span>
                </p>
              </div>

              <button className="text-xl font-bold text-gray-400 hover:text-gray-700">
                ⋯
              </button>
            </div>
            <hr className="border-gray-200 mb-3" />
            {/* Permissions */}
            <ul className="space-y-2">
              {role.permissions.map((permission) => (
                <li
                  key={permission}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="mt-4 h-2 w-2 rounded-full bg-blue-700"></span>

                  <span>{permission}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
