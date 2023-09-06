/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';

import { forwardRef } from 'react';

import { Combobox as ComboboxPrimitive } from '@headlessui/react';

import './styles.css';

interface ComboboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  displayValue?: (item: any) => string;
}

const ComboboxInput = forwardRef<HTMLInputElement, ComboboxInputProps>(
  ({ type, className, displayValue, ...rest }, ref) => (
    <ComboboxPrimitive.Input
      type={type}
      className={classNames('combobox__input', className)}
      displayValue={displayValue}
      ref={ref}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      {...rest}
    />
  ),
);

export default ComboboxInput;
