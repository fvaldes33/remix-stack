import { useState } from "react";
import type { ReactNode } from "react";
import { Button, Stack, Group, Modal } from "~/components/primitives";

export function useConfirmationModal() {
  const [opened, setOpened] = useState<boolean>(false);

  const ConfirmationModal = ({
    title,
    onCancel,
    onConfirm,
    children,
  }: {
    title?: ReactNode;
    onCancel?: () => void;
    onConfirm?: () => void;
    children: ReactNode;
  }) => (
    <Modal
      title={title}
      open={opened}
      onOpenChange={() => setOpened(false)}
      withCloseButton={false}
      size="sm"
    >
      <Stack className="mb-5">{children}</Stack>
      <Group className="justify-end">
        <Button
          variant="primary"
          onClick={() => {
            if (onCancel) {
              onCancel();
            }
            setOpened(false);
          }}
        >
          Cancel
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            if (onConfirm) {
              onConfirm();
            }
            setOpened(false);
          }}
        >
          Confirm
        </Button>
      </Group>
    </Modal>
  );

  return {
    openConfirmModal: () => setOpened(true),
    modal: ConfirmationModal,
  };
}
