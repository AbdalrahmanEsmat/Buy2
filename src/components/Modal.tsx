import { useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  className,
  children,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={onClose}
    >
      <div
        className={`rounded-lg bg-white shadow-xl max-h-[80%] overflow-y-auto ${className ?? ''} `}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
