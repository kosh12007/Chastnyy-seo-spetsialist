import React from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Совместимость CJS и ESM при серверном рендеринге (SSR/SSG)
const PhoneInputComponent =
  (ReactPhoneInput as unknown as { default?: typeof ReactPhoneInput }).default || ReactPhoneInput;

interface PhoneInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  defaultCountry?: string;
}

/**
 * Адаптивное поле ввода телефона с выбором страны.
 * Поддерживает светлую и темную темы оформления.
 */
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
        <label className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <PhoneInputComponent
        country={defaultCountry}
        value={value}
        onChange={(phone) => onChange(`+${phone}`)}
        placeholder={placeholder}
        inputClass={twMerge(
          clsx(
            '!w-full !rounded-xl !bg-slate-50 dark:!bg-obsidian-950 !border !border-slate-300 dark:!border-obsidian-750 !py-3 !text-slate-900 dark:!text-white !placeholder:text-slate-400 dark:!placeholder:text-slate-500 !text-sm !font-sans',
            '!focus:!border-growth-500 !focus:!outline-none !focus:!ring-1 !focus:!ring-growth-500',
            '!transition-colors !duration-200',
            '!pl-[46px]',
            error && '!border-red-500 !focus:!border-red-500',
          ),
        )}
        buttonClass="!bg-slate-50 dark:!bg-obsidian-950 !border-slate-300 dark:!border-obsidian-750 !rounded-l-xl"
        dropdownClass="!bg-white dark:!bg-obsidian-900 !border-slate-200 dark:!border-obsidian-750 !text-slate-900 dark:!text-white !shadow-2xl"
        searchClass="!bg-slate-50 dark:!bg-obsidian-950 !border-slate-300 dark:!border-obsidian-750 !text-slate-900 dark:!text-white !px-2 !py-1 !mb-1"
        enableSearch
        disableSearchIcon
        countryCodeEditable={false}
        preferredCountries={['ru', 'by', 'kz']}
      />
      {error && <span className="text-xs text-red-500 mt-1 block font-mono">{error}</span>}
    </div>
  );
};
