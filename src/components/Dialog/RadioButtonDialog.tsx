import { useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import IconClose from '@/assets/icons/dialog/close.svg';
import Button from '@/components/Button';

import styles from './RadioButtonDialog.module.scss';

interface RadioButtonDialogProps {
  open: boolean;
  onCloseClick: () => void;
  onConfirmClick: () => void;
  text: string;
}

export const RadioButtonDialog = ({
  open,
  onCloseClick,
  onConfirmClick,
  text,
}: RadioButtonDialogProps) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <div className={styles.contentInnerContainer}>
            <Dialog.Description className={styles.description}>{text}</Dialog.Description>
            <div className={styles.radioContainer}>
              <label>
                <input
                  type="radio"
                  name="group"
                  value="exchange"
                  checked={selectedValue === 'exchange'}
                  onChange={handleOptionChange}
                />
                교환
              </label>
              <label>
                <input
                  type="radio"
                  name="group"
                  value="return"
                  checked={selectedValue === 'return'}
                  onChange={handleOptionChange}
                />
                반품
              </label>
            </div>
          </div>
          <Dialog.Close asChild>
            <Button onClick={onConfirmClick}>확인</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button
              type="button"
              className={styles.closed}
              aria-label="Close"
              onClick={onCloseClick}
            >
              <img src={IconClose} alt="close" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
