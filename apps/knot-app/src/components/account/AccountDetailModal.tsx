import * as Dialog from '@radix-ui/react-dialog';
import { css } from '@styled-system/css';
import { ModalLayout } from '@components/layout';
import { DefaultButton } from '@components/shared/Button';
import { AccountItem, AccountModalType } from './type';

interface AccountDetailModalProps {
  type: AccountModalType;
  onOpenChange: (open: boolean) => void;
  accountItemList: AccountItem[];
}

export const AccountDetailModal = ({
  type,
  onOpenChange: handleOpenChange,
  accountItemList,
}: AccountDetailModalProps) => {
  const handleCopyAccountNumber = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('계좌번호가 복사되었습니다.');
    } catch (err) {
      console.error('복사 실패:', err);
      alert('복사에 실패했습니다.');
    }
  };

  return (
    <ModalLayout onOpenChange={handleOpenChange}>
      <div className={css({ width: '400px', p: '6' })}>
        <Dialog.Title className={css({ fontSize: 'lg', fontWeight: 'bold', mb: '4' })}>
          계좌번호
        </Dialog.Title>
        <Dialog.Description className={css({ mb: '4', color: 'grey.600', fontSize: 'sm' })}>
          마음을 전하실 계좌번호입니다.
        </Dialog.Description>

        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '4',
            mt: '10',
            overflowY: 'auto',
            maxHeight: '400px',
          })}
        >
          {accountItemList.map((item) => (
            <div key={item.name}>
              <p className={css({ fontSize: 'sm', lineHeight: '2' })}>
                <span>{type === 'groom' ? '신랑' : '신부'}</span>
                <span className={css({ fontWeight: 'bold' })}>&nbsp;{item.name}</span>
              </p>
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: 'sm',
                  gap: '4',
                })}
              >
                <p>
                  {item.bank} {item.number}
                </p>
                <DefaultButton
                  className={css({
                    border: 'none',
                    p: '0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      opacity: '0.5',
                    },
                  })}
                  onClick={() => handleCopyAccountNumber(item.number)}
                >
                  <img src="/sample/content_copy.png" alt="copy" width={16} height={16} />
                  복사
                </DefaultButton>
              </div>
            </div>
          ))}
        </div>

        <div className={css({ mt: '6', display: 'flex', justifyContent: 'flex-end' })}>
          <Dialog.Close asChild>
            <DefaultButton
              className={css({
                backgroundColor: 'grey.200',
                borderRadius: 'md',
                fontSize: 'sm',
                border: 'none',
                transition: 'background-color 0.2s',
                '&:hover': { backgroundColor: 'grey.300' },
              })}
            >
              닫기
            </DefaultButton>
          </Dialog.Close>
        </div>
      </div>
    </ModalLayout>
  );
};
