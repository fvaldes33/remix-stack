import * as Dialog from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { X } from "tabler-icons-react";
import { classNames } from "~/lib/classNames";
import type { GenericSize } from "./types";
import VisuallyHidden from "./VisuallyHidden";

export interface ModalProps extends Dialog.DialogProps {
  size?: GenericSize;
  padding?: GenericSize | number;
  ariaTitle?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  fullScreen?: boolean;
  withCloseButton?: boolean;
}

const sizeClass = {
  xs: "max-w-screen-xs",
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
};

const paddingClass = {
  xs: "p-4",
  sm: "p-6",
  md: "p-10",
  lg: "p-16",
  xl: "p-32",
  "2xl": "p-32",
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  {
    size = "md",
    padding = "sm",
    ariaTitle,
    title,
    description,
    children,
    fullScreen = false,
    withCloseButton = true,
    ...props
  },
  ref
) {
  const finalSize = fullScreen ? "w-screen max-w-screen" : sizeClass[size];
  const finalPadding =
    typeof padding === "number" ? `${padding}px` : paddingClass[padding];

  return (
    <Dialog.Root {...props}>
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Dialog.Overlay className="bg-slate-900 bg-opacity-50 fixed inset-0 animate-show z-50 backdrop-blur-sm" />
        <Dialog.Content
          className={classNames(
            "bg-white z-50  shadow-2xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "w-full",
            finalSize,
            fullScreen ? "h-screen max-h-screen" : "max-h-[85vh]",
            fullScreen ? "" : "rounded-lg",
            finalPadding,
            "focus:outline-none",
            "animate-modalIn",
            "overflow-y-auto"
          )}
        >
          {ariaTitle && (
            <VisuallyHidden asChild>
              <Dialog.Title>{ariaTitle}</Dialog.Title>
            </VisuallyHidden>
          )}
          {title && <Dialog.Title className="mb-4">{title}</Dialog.Title>}
          {description && (
            <Dialog.Description>{description}</Dialog.Description>
          )}

          {children}

          {withCloseButton && (
            <Dialog.Close asChild>
              <button
                aria-label="Close"
                className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 text-white transition-transform hover:rotate-90"
                data-hide-screenshot
              >
                <X size={16} />
              </button>
            </Dialog.Close>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});

export default Modal;
