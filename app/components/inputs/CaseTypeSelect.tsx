'use client';

import Select from 'react-select'

import useCaseTypes from '@/app/hooks/useCaseTypeSelect';

export type CaseTypeSelectValue = {
  value: string;
}

interface CaseTypeSelectProps {
  value?: CaseTypeSelectValue;
  onChange: (value: CaseTypeSelectValue) => void;
  required?: boolean;
}

const CaseTypeSelect: React.FC<CaseTypeSelectProps> = ({
  value,
  onChange,
  required
}) => {
  const { getAll } = useCaseTypes();

  return ( 
    <div>
      <Select
        placeholder="Case Type"
        isClearable
        options={getAll()}
        value={value}
        required
        onChange={(value) => onChange(value as CaseTypeSelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="
          flex flex-row items-center gap-3">
            <div>
              {option.value}
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg'
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6'
          }
        })}
      />
    </div>
   );
}
 
export default CaseTypeSelect;