import * as Dialog from '@radix-ui/react-dialog';

import IconClose from '@/assets/icons/dialog/close.svg';
import Button from '@/components/Button';

import styles from './DefaultDialog.module.scss';

interface DefaultDialogProps {
  open: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
}

export const DefaultDialog = ({ open, onClick, icon, text }: DefaultDialogProps) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <div className={styles.contentInnerContainer}>
            <div className={styles.iconContainer}>{icon}</div>
            <Dialog.Description className={styles.description}>{text}</Dialog.Description>
          </div>
          <Dialog.Close asChild>
            <Button onClick={onClick}>확인</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button type="button" className={styles.closed} aria-label="Close" onClick={onClick}>
              <img src={IconClose} alt="close" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
