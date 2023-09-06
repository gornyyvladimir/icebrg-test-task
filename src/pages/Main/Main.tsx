import { useMemo, useState } from 'react';
import { useDebounce } from 'react-use';
import useAuth from '../../hooks/useAuth';
import useSearchQuery from '../../hooks/useSearchQuery';
import Combobox from '../../components/Combobox/Combobox';
import { getOptionsFromData } from '../../utils';
import './styles.css';
import Button from '../../components/Button/Button';

const Main = () => {
  const { resetAuth } = useAuth();
  const [query, setQuery] = useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useDebounce(
    () => {
      setDebouncedValue(query);
    },
    500,
    [query],
  );

  const { data, isFetching } = useSearchQuery(debouncedValue, {
    enabled: debouncedValue !== '',
    keepPreviousData: true,
  });

  const options = useMemo(() => getOptionsFromData(data), [data]);

  return (
    <div className="main">
      <div className="header">
        <Button onClick={resetAuth}>Logout</Button>
      </div>
      <Combobox
        value={query}
        onChange={setQuery}
        onSelect={setQuery}
        options={options}
        isLoading={isFetching}
      />
    </div>
  );
};
export default Main;
