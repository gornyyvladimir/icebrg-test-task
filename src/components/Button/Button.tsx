/* eslint-disable react/button-has-type */
import { forwardRef } from 'react';
import classNames from 'classnames';
import './styles.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = 'button', ...props }, ref) => (
    <button
      type={type}
      className={classNames('button', className)}
      ref={ref}
      {...props}
    />
  ),
);

Button.displayName = 'Button';

export default Button;
