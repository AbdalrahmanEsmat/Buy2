import Loader from '@/components/Loader';
import Modal from '@/components/Modal';
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  type: 'decision' | 'loading' | 'success' | 'error';
  message: string;
};

export default function DeletingModal({
  isOpen,
  onClose,
  onDelete,
  type,
  message,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={type === 'loading' ? () => {} : onClose}>
      <div className="flex flex-col items-center gap-9 rounded-lg bg-white p-8">
        {type !== 'decision' && (
          <div
            className={`flex h-35 w-35 items-center justify-center rounded-full ${
              type === 'loading'
                ? 'bg-gray-100'
                : type === 'success'
                  ? 'bg-green-100'
                  : 'bg-red-100'
            }`}
          >
            {type === 'loading' ? (
              <Loader />
            ) : type === 'success' ? (
              <CheckIcon className="h-20 w-20 text-green-500" strokeWidth={2} />
            ) : (
              <ExclamationTriangleIcon
                className="h-20 w-20 text-red-500"
                strokeWidth={2}
              />
            )}
          </div>
        )}

        <p className="text-xl font-semibold">{message}</p>

        {type === 'decision' && (
          <div className="mt-6 flex justify-end gap-4">
            <button type="button" className="cursor-pointer" onClick={onClose}>
              Cancel
            </button>

            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}
