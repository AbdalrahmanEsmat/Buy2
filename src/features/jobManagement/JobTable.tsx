import Table from '../../components/Table';
import { PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import type { Job } from '../../types';

type Props = {
  searchValue: string;
  searchResult: Record<string, Job>;
  jobs: Record<string, Job>;
};

export default function JobTable({ searchValue, searchResult, jobs }: Props) {
  let toBeShowen = jobs;
  if (searchValue.length > 0 && Object.keys(searchResult).length > 0) {
    toBeShowen = searchResult;
  } else if (searchValue.length > 0 && Object.keys(searchResult).length === 0) {
    return (
      <p className="text-2xl text-center mt-5">No results for: {searchValue}</p>
    );
  }

  return (
    <Table className="border border-gray-200  rounded-xl">
      <Table.Header>
        <Table.Row className="border-b border-b-gray-200 ">
          <Table.Column className="px-12 py-16 text-gray-400 font-normal text-left text-sm">
            Job Name
          </Table.Column>
          <Table.Column className="px-12 py-16 text-gray-400 font-normal text-left text-sm">
            Job Description
          </Table.Column>
          <Table.Column
            className="px-12 py-16 text-gray-400 font-normal text-left"
            text-sm
          >
            Number of employees
          </Table.Column>
          <Table.Column className="px-8 py-11 text-gray-400 font-normal text-left text-sm">
            ...
          </Table.Column>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Object.values(toBeShowen).map((job) => (
          <Table.Row key={job.id} className="border-b border-b-gray-200 ">
            <Table.Cell className="py-9 pl-12 pr-8 text-black ">
              {job.title}
            </Table.Cell>
            <Table.Cell className="py-9 px-16 text-black ">
              {job.description}
            </Table.Cell>
            <Table.Cell className="py-9 px-16 text-black">
              {job.employeeIds.length}
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <button className="cursor-pointer">
                  <PencilIcon className="size-8 text-blue-600" />
                </button>

                <button className="cursor-pointer">
                  <TrashIcon className="size-8 text-red-500" />
                </button>

                <button className="cursor-pointer">
                  <EyeIcon className="size-8 text-blue-600" />
                </button>
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
