'use client';

import React, { createContext, useCallback, useContext, useId, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type TabsContextValue = {
  baseId: string;
  value: string;
  setValue: (nextValue: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (context == null) {
    throw new Error('Tabs 컴포넌트 내부에서만 사용할 수 있습니다.');
  }

  return context;
};

type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

export const Tabs = ({
  children,
  className,
  defaultValue = '',
  value: controlledValue,
  onValueChange,
  ...props
}: TabsProps) => {
  const generatedId = useId();
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const value = controlledValue ?? uncontrolledValue;

  const setValue = useCallback(
    (nextValue: string) => {
      if (controlledValue == null) {
        setUncontrolledValue(nextValue);
      }

      onValueChange?.(nextValue);
    },
    [controlledValue, onValueChange],
  );

  const contextValue = {
    baseId: generatedId,
    value,
    setValue,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

type TabsListProps = React.HTMLAttributes<HTMLDivElement>;

export const TabsList = ({ className, ...props }: TabsListProps) => {
  return (
    <div
      role="tablist"
      className={twMerge(
        'inline-flex items-center gap-1 rounded-xl bg-(--color-muted) p-1',
        className,
      )}
      {...props}
    />
  );
};

type TabsTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

export const TabsTrigger = ({ className, onClick, value, ...props }: TabsTriggerProps) => {
  const { baseId, value: selectedValue, setValue } = useTabsContext();
  const isSelected = selectedValue === value;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    setValue(value);
  };

  return (
    <button
      id={`${baseId}-trigger-${value}`}
      type="button"
      role="tab"
      aria-selected={isSelected}
      aria-controls={`${baseId}-content-${value}`}
      data-state={isSelected ? 'active' : 'inactive'}
      className={twMerge(
        'inline-flex min-w-24 cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-(--color-muted-foreground) transition-colors',
        'data-[state=active]:bg-white data-[state=active]:text-(--color-foreground) data-[state=active]:shadow-sm',
        className,
      )}
      onClick={handleClick}
      {...props}
    />
  );
};

type TabsContentProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

export const TabsContent = ({ className, value, ...props }: TabsContentProps) => {
  const { baseId, value: selectedValue } = useTabsContext();

  if (selectedValue !== value) {
    return null;
  }

  return (
    <div
      id={`${baseId}-content-${value}`}
      role="tabpanel"
      aria-labelledby={`${baseId}-trigger-${value}`}
      className={twMerge(
        'mt-4 rounded-2xl border border-(--color-border) bg-(--color-card) p-5 text-(--color-card-foreground) focus:outline-none',
        className,
      )}
      {...props}
    />
  );
};
