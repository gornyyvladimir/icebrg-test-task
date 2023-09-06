import classNames from 'classnames';
import './styles.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Card = ({ children, className }: Props) => {
  return <div className={classNames('card', className)}>{children}</div>;
};
export default Card;
