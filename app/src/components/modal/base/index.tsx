type ModalProps = {
  show: boolean;
  children: React.ReactNode;
};

export function Modal({ show = false, children }: ModalProps) {
  return (
    <div
      className={`${
        !show && "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full ${
        show && "bg-slate-500/50"
      }`}
    >
      <div
        className={`relative p-4 w-full max-w-md max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        {show && children}
      </div>
    </div>
  );
}
