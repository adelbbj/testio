import { nextFocus } from "@/hooks/next-focus";
import { usePortal } from "@/hooks/use-portal";
import { getFocusableElements } from "@/utils/get-focusable-elements";
import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Frame: React.FC<{
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  onClose: () => void;
  className?: any;
  open?: boolean;
  children: React.ReactNode;
}> = ({
  children,
  closeOnClickOutside = true,
  closeOnEsc = true,
  className,
  onClose,
  open = true,
}) => {
  const portal = usePortal();
  const previousFocus = useRef<HTMLElement | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case "Escape": {
          if (closeOnEsc) onClose();
          break;
        }
        case "Tab": {
          e.preventDefault();
          nextFocus(getFocusableElements(container.current), !e.shiftKey);
          break;
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeOnEsc, onClose, open]);

  useEffect(() => {
    // aria-hidden
    document
      .getElementById("root")
      ?.setAttribute("aria-hidden", open.toString());
    portal.current?.setAttribute("aria-hidden", (!open).toString());

    if (open) {
      previousFocus.current = (document.activeElement as HTMLElement) ?? null;
      nextFocus(getFocusableElements(container.current));
    } else {
      previousFocus.current?.focus?.();
      previousFocus.current = null;
    }
  }, [open, portal]);

  const onOverlayClick = (e: React.MouseEvent) => {
    if (!container.current?.contains(e.target as Node)) onClose();
  };

  return createPortal(
    <div
      className={classNames(
        "fixed inset-0 z-10 bg-black/60 flex items-center justify-center",
        `${open ? "visible" : "invisible"}` // control visibility via `open` attribute (or render conditionally)
      )}
      onClick={closeOnClickOutside ? onOverlayClick : undefined}
    >
      <div
        className={classNames("relative mx-auto", className)}
        ref={container}
      >
        <div className="overflow-hidden bg-white rounded-[20px]">
          {children}
        </div>
      </div>
    </div>,
    portal.current
  );
};
const Head: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className="block border-b border-base-200 p-6">
    <h1 className="text-lg font-bold leading-8 text-black">{children}</h1>
  </div>
);

const Body: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => <div className=" p-6">{children}</div>;

export const Modal = { Frame, Head, Body };
