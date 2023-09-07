import { useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'react-use';
import { toast } from 'react-toastify';
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

  const { data, isFetching, isError } = useSearchQuery(debouncedValue, {
    enabled: debouncedValue !== '',
    keepPreviousData: true,
  });

  const options = useMemo(() => getOptionsFromData(data), [data]);

  useEffect(() => {
    if (isError) {
      toast.error('Something went wrong, try again later');
    }
  }, [isError]);

  return (
    <div className="main">
      <div className="header">
        <Button onClick={resetAuth}>Logout</Button>
      </div>
      <div className="main__content">
        <Combobox
          placeholder="Search for a country..."
          className="main__combobox"
          value={query}
          onChange={setQuery}
          onSelect={setQuery}
          options={options}
          isLoading={isFetching}
        />
      </div>
    </div>
  );
};
export default Main;
