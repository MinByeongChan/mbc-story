export interface AccountItem {
  name: string;
  number: string;
  bank: string;
}

export type AccountModalType = 'groom' | 'bride';

export interface AccountModalState {
  isOpen: boolean;
  props: {
    type: AccountModalType;
    accountItemList: AccountItem[];
  };
}
