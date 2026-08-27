import { roles } from "@/mocks/db1";
import RoleCard from "./RoleCard";

export default function RoleGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
      {roles.map((role) => (
        <RoleCard key={role.id} role={role} />
      ))}
    </div>
  );
}
