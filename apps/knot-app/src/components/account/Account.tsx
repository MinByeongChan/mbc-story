import { DefaultButton } from '@components/shared/Button';
import { GridTitle } from '@components/shared/gridTitle';
import { css } from '@styled-system/css';
import { AccountDetailModal } from './AccountDetailModal';
import { AccountItem, AccountModalType } from './type';
import { useModal } from '@components/layout/model/useModal';

interface AccountProps {
  groomAccountItemList: AccountItem[];
  brideAccountItemList: AccountItem[];
}

export const Account = ({ groomAccountItemList, brideAccountItemList }: AccountProps) => {
  const { openModal, onChangeModal } = useModal((state) => state);
  const MODAL_KEY = 'ACCOUNT_MODAL';

  const handleOpenModal = (type: AccountModalType) => {
    const accountItemList = type === 'groom' ? groomAccountItemList : brideAccountItemList;
    openModal({
      type: MODAL_KEY,
      children: (
        <AccountDetailModal
          type={type}
          onOpenChange={(isOpen) => onChangeModal(MODAL_KEY, isOpen)}
          accountItemList={accountItemList}
        />
      ),
    });
  };

  return (
    <section className={css({ p: '4' })}>
      <GridTitle>Account</GridTitle>

      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: '10',
          borderBottom: '1px dashed',
          borderColor: 'primary',
        })}
      >
        <p className={css({ fontWeight: 'bold', fontSize: 'lg' })}>마음 전하실 곳</p>
      </div>

      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          mt: '16',
        })}
      >
        <p className={css({ lineHeight: '2' })}>참석이 어려워 직접 축하를 전하지 못하는</p>
        <p className={css({ lineHeight: '2' })}>분들을 위해 계좌번호를 기재하였습니다.</p>
        <p className={css({ lineHeight: '2' })}>넓은 마음으로 양해 부탁드립니다.</p>
        <p className={css({ lineHeight: '2' })}>전해주시는 진심은 소중하게 간직하여</p>
        <p className={css({ lineHeight: '2' })}>좋은 부부의 모습으로 보답하겠습니다.</p>
      </div>

      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: '10',
          gap: '8',
          mt: '16',
        })}
      >
        <DefaultButton onClick={() => handleOpenModal('groom')}>신랑측</DefaultButton>
        <DefaultButton onClick={() => handleOpenModal('bride')}>신부측</DefaultButton>
      </div>
    </section>
  );
};
