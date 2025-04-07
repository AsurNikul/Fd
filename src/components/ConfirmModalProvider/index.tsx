/**
 * @format
 */
import React, {JSX, useCallback, useMemo, useState} from 'react';

import {ConfirmModalContext} from './ConfirmModalContext';
import CustomConfirmModal from './CustomConfirmModal';
import Typography from '../Typography';

export type VariantTypes = 'success' | 'warning' | 'error';

type IConfirmModalProps = {
  children: React.ReactNode;
};

export type ShowParams = {
  message?: JSX.Element | undefined;
  title?: JSX.Element | undefined;
  icon?: JSX.Element | undefined;
  submitLabel?: string;
  cancelLabel?: string;
  secondaryLabel?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  onSecondary?: () => void;
};

interface ProviderState extends ShowParams {
  open: boolean;
}

export interface ConfirmModalContextType {
  show: (params: ShowParams) => void;
}

const DEFAULT_STATE = {
  open: false,
  message: <Typography title={'Message'} size={14} />,
  title: <Typography title={'Title'} />,
  submitLabel: 'Confirm',
  cancelLabel: 'Cancel',
  icon: undefined,
};

function ConfirmModalProvider({children}: IConfirmModalProps) {
  const [state, setState] = useState<ProviderState>({...DEFAULT_STATE});

  const show = useCallback((params: ShowParams) => {
    setState(() => ({...DEFAULT_STATE, ...params, open: true}));
  }, []);

  const handleCancel = () => {
    const {onCancel} = state;
    setState(v => ({...v, open: false}));
    onCancel?.();
  };

  const handleConfirm = () => {
    const {onConfirm} = state;
    setState(v => ({...v, open: false}));
    onConfirm?.();
  };

  const handleSecondary = () => {
    const {onSecondary} = state;
    setState(v => ({...v, open: false}));
    onSecondary?.();
  };

  const handleClose = () => {
    setState(v => ({...v, open: false}));
  };

  const context = useMemo(() => ({show}), [show]);

  return (
    <>
      <ConfirmModalContext.Provider value={context}>
        {children}
      </ConfirmModalContext.Provider>
      <CustomConfirmModal
        cancelLabel={state.cancelLabel || ''}
        handleCancel={handleCancel}
        handleClose={handleClose}
        icon={state.icon}
        handleConfirm={handleConfirm}
        handleSecondary={handleSecondary}
        message={state.message || undefined}
        open={state.open}
        secondaryLabel={state.secondaryLabel || ''}
        submitLabel={state.submitLabel || ''}
        title={state.title || undefined}
      />
    </>
  );
}

export {ConfirmModalProvider};
