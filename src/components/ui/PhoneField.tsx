'use client';
import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';

const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  inputClassName?: string;
  containerClassName?: string;
  country?: string;
  disabled?: boolean;
};

export default function PhoneField({
  value,
  onChange,
  placeholder = 'Enter phone number',
  required,
  inputClassName,
  containerClassName,
  country = 'us',
  disabled,
}: Props) {
  const digits = (value ?? '').replace(/\D/g, '');
  const isEmpty = digits.length <= 2;
  const props: ComponentProps<typeof PhoneInput> = {
    country,
    value,
    onChange: (v: string) => onChange(v),
    placeholder,
    enableSearch: true,
    disableSearchIcon: true,
    countryCodeEditable: false,
    inputProps: { required, name: 'phone' },
    containerClass: `phone-field ${isEmpty ? 'phone-field--empty' : ''} ${containerClassName ?? ''}`.trim(),
    inputClass: inputClassName,
    disabled,
  };
  return <PhoneInput {...props} />;
}
