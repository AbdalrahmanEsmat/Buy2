interface PermissionListProps {
  permissions: string[];
}

export default function PermissionList({ permissions }: PermissionListProps) {
  return (
    <ul className="space-y-2">
      {permissions.map((permission) => (
        <li
          key={permission}
          className="flex items-start gap-2 text-sm text-gray-600"
        >
          <span className="mt-4 h-2 w-2 rounded-full bg-blue-700" />

          <span>{permission}</span>
        </li>
      ))}
    </ul>
  );
}
