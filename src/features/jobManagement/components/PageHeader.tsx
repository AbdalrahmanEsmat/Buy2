import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

type Props = {
  text: string;
};

export default function PageHeader({ text }: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex h-9 items-center gap-8">
      <button
        onClick={() => navigate('/job-management', { replace: true })}
        className="flex items-center gap-4 text-[#25459B] cursor-pointer"
      >
        <ChevronLeftIcon className="w-8" />{' '}
        <span className="text-sm">Back </span>
      </button>

      <h1 className="text-2xl font-semibold text-[#171717]">{text}</h1>
    </div>
  );
}
