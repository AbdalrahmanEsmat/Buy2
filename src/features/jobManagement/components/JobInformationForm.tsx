import Loader from '../../../components/Loader';
import { useDepartments } from '../../departmentManagement/useDepartments';
import { useSeniorities } from '../../seniorityManagement/useSeniorities';
import { useEmployees } from '../../employeeManagement/useEmployees';
import { useQualifications } from '../../qualificationManagement/useQualifications';
import CreateEditFormInput from './CreateEditFormInput';
import FormDropDownMenu from './FormDropDownMenu';
import type { Job } from '@/types';

type JobInformationFormProps = {
  formData: Job;
  setFormData: React.Dispatch<React.SetStateAction<Job>>;
};

export default function JobInformationForm({
  formData,
  setFormData,
}: JobInformationFormProps) {
  const {
    departments,
    isPending: isDepartmentsPending,
    error: departmentsError,
  } = useDepartments();

  const {
    seniorityLevels,
    isPending: isSeniorityLevelsPending,
    error: seniorityLevelsError,
  } = useSeniorities();

  const {
    employees,
    isPending: isEmployeesPending,
    error: employeesError,
  } = useEmployees();

  const {
    qualifications,
    isPending: isQualificationsPending,
    error: qualificationsError,
  } = useQualifications();

  if (
    isDepartmentsPending ||
    isSeniorityLevelsPending ||
    isEmployeesPending ||
    isQualificationsPending
  ) {
    return <Loader />;
  }

  if (
    departmentsError ||
    seniorityLevelsError ||
    employeesError ||
    qualificationsError
  ) {
    throw new Error('Some thing went  wrong');
  }

  return (
    <div className="grid grid-cols-2 gap-x-11 gap-y-14 w-full">
      <CreateEditFormInput
        id="jobTitle"
        labelText="Job Title"
        inputType="text"
        placeHolder="Job Title"
        value={formData.title}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            title: e.target.value.trim().toLowerCase(),
          }))
        }
        required={true}
      />

      <CreateEditFormInput
        id="jobDescription"
        labelText="Job Description"
        inputType="text"
        placeHolder="Job Description"
        value={formData.description}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            description: e.target.value.trim().toLowerCase(),
          }))
        }
        required={true}
      />

      <FormDropDownMenu
        name="departmentId"
        labelText="Department"
        placeHolder="Department"
        list={departments}
        chioceType="single"
        searchPlaceHolder="departments"
        formData={formData}
        setFormData={setFormData}
      />

      <FormDropDownMenu
        name="qualificationIds"
        labelText="Required Qualification"
        placeHolder="Required Qualification"
        list={qualifications}
        chioceType="multiple"
        searchPlaceHolder="qualifications"
        formData={formData}
        setFormData={setFormData}
      />

      <FormDropDownMenu
        name="seniorityLevelId"
        labelText="Seniority"
        placeHolder="Choose Experience Level"
        list={seniorityLevels}
        chioceType="single"
        searchPlaceHolder="levels of experience"
        formData={formData}
        setFormData={setFormData}
      />

      <FormDropDownMenu
        name="reportingManagerId"
        labelText="Manager name"
        placeHolder="Manager name"
        list={employees}
        chioceType="single"
        searchPlaceHolder="managers"
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
