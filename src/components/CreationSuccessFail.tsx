import {
  CheckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import Modal from './Modal';
import Loader from './Loader';

type CreationSuccessFailProps = {
  isOpen: boolean;
  onClose: () => void;
  type: 'loading' | 'success' | 'error';
  title: string;
  message: string;
  buttonText?: string;
};

export default function CreationSuccessFail({
  isOpen,
  onClose,
  type,
  title,
  message,
  buttonText = 'Got it',
}: CreationSuccessFailProps) {
  const isLoading = type === 'loading';
  const isSuccess = type === 'success';

  return (
    <Modal
      isOpen={isOpen}
      onClose={isLoading ? () => {} : onClose}
      className="w-[320px] rounded-2xl px-8 py-6 flex flex-col gap-6 items-center"
    >
      {/* Icon / Loader */}
      <div
        className={`flex h-35 w-35 items-center justify-center rounded-full ${
          isLoading ? 'bg-gray-100' : isSuccess ? 'bg-green-100' : 'bg-red-100'
        }`}
      >
        {isLoading ? (
          <Loader />
        ) : isSuccess ? (
          <CheckIcon className="h-20 w-20 text-green-500" strokeWidth={2} />
        ) : (
          <ExclamationTriangleIcon
            className="h-20 w-20 text-red-500"
            strokeWidth={2}
          />
        )}
      </div>

      {/* Title */}
      <h2 className="font-semibold text-black">{title}</h2>

      {/* Message */}
      <p className="mt-[-0.5rem] text-xs text-gray-400">{message}</p>

      {/* Button */}
      {!isLoading && (
        <button
          type="button"
          onClick={onClose}
          className={`w-full rounded-xl py-3 text-sm font-medium text-white transition ${
            isSuccess
              ? 'bg-primary-900 hover:bg-primary-800'
              : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          {buttonText}
        </button>
      )}
    </Modal>
  );
}
