'use client';

import Select from 'react-select'

import useSpecialities from '@/app/hooks/useSpecialities';

export type SpecialitySelectValue = {
  value: string;
}

interface SpecialitySelectProps {
  value?: SpecialitySelectValue;
  onChange: (value: SpecialitySelectValue) => void;
  required?: boolean;
}

const SpecialitySelect: React.FC<SpecialitySelectProps> = ({
  value,
  onChange,
  required
}) => {
  const { getAll } = useSpecialities();

  return ( 
    <div>
      <Select
        placeholder="Speciality"
        isClearable
        options={getAll()}
        value={value}
        required
        onChange={(value) => onChange(value as SpecialitySelectValue)}
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
 
export default SpecialitySelect;