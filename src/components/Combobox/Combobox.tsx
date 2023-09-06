import { Fragment, forwardRef } from 'react';
import classNames from 'classnames';
import { Combobox as ComboboxPrimitive } from '@headlessui/react';
import { CheckIcon } from '@radix-ui/react-icons';
import { Loader2 } from 'lucide-react';
import ComboboxInput from './ComboboxInput/ComboboxInput';
import './styles.css';

export type ComboboxOption = {
  key: string;
  title: string;
  options: string[];
};

export type ComboboxOptions = Record<string, ComboboxOption>;

export interface ComboboxProps {
  /**
   * List of values
   */
  options: ComboboxOptions;
  /**
   * Selected value
   */
  value: string;
  /**
   * The function to call when a new option is selected
   */
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
  /**
   * Name used when using this component inside a form
   */
  name?: string;
  /**
   * Placeholder displays label of input
   */
  placeholder?: string;
  /**
   * Optional class name
   */
  className?: string;
  isLoading?: boolean;
}

const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      options,
      value,
      onChange,
      onSelect,
      name,
      placeholder,
      isLoading,
      className,
    },
    ref,
  ) => {
    const keys = Object.keys(options);
    const isNoOptions = keys.length === 0;
    const isOptionsEmpty = keys.reduce((acc, key) => {
      const values = options[key as keyof ComboboxProps['options']];
      return acc && values.options.length === 0;
    }, true);
    const isEmpty = isNoOptions || isOptionsEmpty;
    const isShowed = value !== '';

    return (
      <ComboboxPrimitive
        as="div"
        value={value}
        onChange={onSelect}
        name={name}
        className={classNames('combobox', className)}
      >
        <ComboboxInput
          ref={ref}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
        {isShowed && (
          <ComboboxPrimitive.Options className="combobox__options">
            {isLoading && (
              <li className="combobox__option combobox__option--loading">
                <Loader2 width={16} height={16} className="combobox__loader" />
                <span className="combobox__loader-text">Updating...</span>
              </li>
            )}
            {isEmpty ? (
              <li className="combobox__option">No results</li>
            ) : (
              keys.map((sectionKey) => {
                const section =
                  options[sectionKey as keyof ComboboxProps['options']];

                const { title, options: sectionOptions } = section;
                return (
                  <li className="combobox__section" key={sectionKey}>
                    <p className="combobox__section-title">{title}</p>
                    <ul>
                      {sectionOptions.map((item) => (
                        <ComboboxPrimitive.Option
                          value={item}
                          as={Fragment}
                          key={`${sectionKey}-${item}`} // Provide a unique key prop for the Fragment component
                        >
                          {({ active, selected }) => (
                            <li
                              key={item}
                              className={classNames(
                                'combobox__section-option',
                                {
                                  'combobox__section-option--selected':
                                    selected,
                                  'combobox__section-option--active': active,
                                },
                              )}
                            >
                              {selected && (
                                <CheckIcon className="combobox__select-icon" />
                              )}
                              {item}
                            </li>
                          )}
                        </ComboboxPrimitive.Option>
                      ))}
                    </ul>
                  </li>
                );
              })
            )}
          </ComboboxPrimitive.Options>
        )}
      </ComboboxPrimitive>
    );
  },
);

export default Combobox;
