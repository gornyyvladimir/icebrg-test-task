import { forwardRef } from 'react';
import classNames from 'classnames';
import './styles.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={classNames('input', className)}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = 'Input';

export default Input;
