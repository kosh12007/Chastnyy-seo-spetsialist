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
    <div className="flex flex-col gap-1.5 font-mono text-xs">
      {label && (
        <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
          {label}
          {required && <span className="text-red-400 ml-0.5">*</span>}
        </label>
      )}
      <ReactPhoneInput
        country={defaultCountry}
        value={value}
        onChange={(phone) => onChange(`+${phone}`)}
        placeholder={placeholder}
        inputClass={twMerge(
          clsx(
            '!w-full !rounded-xl !bg-obsidian-950 !border !border-obsidian-750 !py-3 !text-white !placeholder:text-slate-500 !text-sm !font-sans',
            '!focus:!border-growth-500 !focus:!outline-none !focus:!ring-1 !focus:!ring-growth-500',
            '!transition-colors !duration-200',
            '!pl-[46px]',
            error && '!border-red-500 !focus:!border-red-500',
          ),
        )}
        buttonClass="!bg-obsidian-950 !border-obsidian-750 !rounded-l-xl"
        dropdownClass="!bg-obsidian-900 !border-obsidian-750 !text-white !shadow-2xl"
        searchClass="!bg-obsidian-950 !border-obsidian-750 !text-white !px-2 !py-1 !mb-1"
        enableSearch
        disableSearchIcon
        countryCodeEditable={false}
        preferredCountries={['ru', 'by', 'kz']}
      />
      {error && <span className="text-xs text-red-400 font-mono">{error}</span>}
    </div>
  );
};
