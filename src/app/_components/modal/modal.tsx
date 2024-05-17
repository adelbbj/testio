import classNames from "classnames";
import React, { useEffect, useRef } from "react";

const Frame: React.FC<{
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  onClose: () => void;
  open?: boolean;
}> = ({
  children,
  closeOnClickOutside = true,
  closeOnEsc = true,
  onClose,
  open = true,
}) => {
  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (closeOnEsc && open && e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyPress);
    return () => window.removeEventListener("keydown", onKeyPress);
  }, [closeOnEsc, onClose, open]);

  const container = useRef<HTMLDivElement>(null);
  const onOverlayClick = (e: React.MouseEvent) => {
    if (!container.current?.contains(e.target as Node)) onClose();
  };

  return (
    // transparent overlay: `inset-0` to stretch over the entire screen (combines`top-0`, `right-0`, `bottom-0`, and `left-0`)
    <div
      className={classNames(
        "fixed inset-0 z-10 bg-black/60 flex items-center justify-center",
        `${open ? "visible" : "invisible"}` // control visibility via `open` attribute (or render conditionally)
      )}
      onClick={closeOnClickOutside ? onOverlayClick : undefined}
    >
      {/* container: `max-w-sm` to make it reasonably narrow, `mx-auto` to center horizontally */}
      <div className="relative w-full max-w-sm mx-auto" ref={container}>
        {/* closer in the corner */}
        {/* <button
          className="absolute -top-2 -right-2 flex justify-center rounded-full h-8 w-8 bg-gray-600 cursor-pointer shadow-xl"
          onClick={() => onClose()}
          title="Bye bye"
        >
          <span className="text-2xl leading-7 select-none">&times;</span>
        </button> */}
        {/* contents */}
        <div className="overflow-hidden bg-white rounded-[20px] p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

const Head: React.FC = ({ children }) => (
  <div className="block">
    <h1 className="text-lg font-bold leading-8">{children}</h1>
  </div>
);

const Body: React.FC = ({ children }) => <div className="mt-8">{children}</div>;

export const Modal = { Frame, Head, Body };
