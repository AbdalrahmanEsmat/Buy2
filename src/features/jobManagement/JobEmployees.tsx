import Table from '@/components/Table';
import type { JobDetails } from '@/types';
import { EyeIcon } from '@heroicons/react/24/solid';
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function JobEmployees() {
  const { job } = useOutletContext<{ job: JobDetails }>();
  const { employees } = job;
  const Navigate = useNavigate();

  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <Table className="text-sm text-center">
        <Table.Header>
          <Table.Row className="border-b border-gray-200">
            <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
              Employee ID
            </Table.Cell>
            <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
              Employee name
            </Table.Cell>
            <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
              Email
            </Table.Cell>
            <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
              Join Date
            </Table.Cell>
            <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
              Details
            </Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {employees.map((employee, idx) => (
            <Table.Row
              className={`${idx !== employees.length - 1 ? 'border-b border-gray-200' : ''}`}
              key={employee.id}
            >
              <Table.Cell className="py-8">{employee.id}</Table.Cell>
              <Table.Cell>{employee.name}</Table.Cell>
              <Table.Cell>{employee.email}</Table.Cell>
              <Table.Cell>{employee.joinDate}</Table.Cell>
              <Table.Cell>
                <div className="flex justify-center">
                  <button
                    className="cursor-pointer"
                    onClick={() => Navigate(`${employee.id}`)}
                  >
                    <EyeIcon className="size-10 text-gray-500" />
                  </button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
