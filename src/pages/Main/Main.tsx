import useSearchQuery from '../../hooks/useSearchQuery';

interface Props {}
const Main = (props: Props) => {
  const { data } = useSearchQuery('test');

  console.log('Main ~ data:', data);

  return <div>Main</div>;
};
export default Main;
