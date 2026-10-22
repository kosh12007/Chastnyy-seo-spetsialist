import React from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface PhoneInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  defaultCountry?: string;
}

export const PhoneInputField: React.FC<PhoneInputProps> = ({
  label,
  value,
  onChange,
  error,
  placeholder = '+7 (999) 123-45-67',
  required,
  defaultCountry = 'ru',
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-dark-800">
          {label}
          {required && <span className="text-accent-600 ml-0.5">*</span>}
        </label>
      )}
      <ReactPhoneInput
        country={defaultCountry}
        value={value}
        onChange={(phone) => onChange(`+${phone}`)}
        placeholder={placeholder}
        inputClass={twMerge(
          clsx(
            'w-full !rounded-lg !border !border-dark-100 !py-3 !text-dark-900 !placeholder:text-dark-500',
            '!focus:!border-primary-600 !focus:!outline-none !focus:!ring-2 !focus:!ring-primary-600/20',
            '!transition-colors !duration-200',
            '!pl-[42px]',
            error && '!border-accent-600 !focus:!border-accent-600 !focus:!ring-accent-600/20',
          ),
        )}
        buttonClass="!rounded-l-lg"
        dropdownClass="!bg-white !border-dark-100 !shadow-lg"
        searchClass="!border !border-dark-100 !px-2 !py-1 !mb-1"
        enableSearch
        disableSearchIcon
        countryCodeEditable={false}
        preferredCountries={['ru', 'ua', 'by', 'kz']}
      />
      {error && <span className="text-sm text-accent-600">{error}</span>}
    </div>
  );
};
