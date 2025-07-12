import { X } from 'lucide-react';
import { MouseEventHandler, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ModalProps = {
  className?: string;
  children: ReactNode;
  onClose: MouseEventHandler<HTMLButtonElement>;
};
function Modal({ children, className, onClose }: ModalProps) {
  const modalClassName = twMerge(
    'min-h-[500px] w-[500px] bg-white rounded-xl p-7 relative',
    className
  );
  return (
    <div className="w-screen h-screen top-0 right-0 fixed z-50 bg-black/30 flex items-center justify-center">
      <div className={modalClassName}>
        <button
          className="absolute top-5 right-5 cursor-pointer hover:opacity-50"
          onClick={onClose}
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
