import RoleGrid from "@/features/roleManagement/components/RoleGrid";
import { useNavigate } from "react-router-dom";

export default function RoleManagement() {
  const navigate = useNavigate();
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Role Based</h2>

        <button
          className="rounded-lg bg-blue-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-800"
          onClick={() => navigate("/role-management/create-new-role")}
        >
          Create New Role
        </button>
      </div>

      {/* cards */}
      <RoleGrid />
    </div>
  );
}
