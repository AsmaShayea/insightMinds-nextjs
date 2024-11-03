"use client";
import { useId } from "react";
import Image from "next/image";
import { useState } from "react";
import Select, { DropdownIndicatorProps, SingleValue, components } from "react-select";
import { DropDownIcon } from "@/assets/constants";

interface CountryOption {
  value: string;
  label: string;
  flag: string;
}

const DropdownIndicator: React.FC<DropdownIndicatorProps<CountryOption>> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  );
};

// Define the options array with country data
const countryOptions: CountryOption[] = [
  { value: "us", label: "1+", flag: "https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg" },
  { value: "qa", label: "974+", flag: "https://catamphetamine.gitlab.io/country-flag-icons/3x2/QA.svg" },
  { value: "sa", label: "966+", flag: "https://catamphetamine.gitlab.io/country-flag-icons/3x2/SA.svg" },
  // Add more countries as needed
];

// Define the custom option format
const formatOptionLabel = ({ label, flag }: CountryOption) => (
  <div className="flex items-center gap-2 flex-row-reverse">
    <Image src={flag} alt={label} width={24} height={20} className="rounded-sm" />
    {label}
  </div>
);

// Define props for the CountrySelect component
interface CountrySelectProps {
  className: string;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ className }) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);

  const handleCountryChange = (country: SingleValue<CountryOption>) => {
    setSelectedCountry(country);
    console.log(selectedCountry?.label);
  };
  return (
    <Select<CountryOption>
      options={countryOptions}
      instanceId={useId()}
      formatOptionLabel={formatOptionLabel}
      onChange={handleCountryChange}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator,
      }}
      isSearchable={false}
      placeholder="000"
      unstyled
      styles={{
        control: (base) => ({
          ...base,
          height: "auto",
          minHeight: "auto",
        }),
      }}
      classNames={{
        control: () => className,
        placeholder: () => "text-black/50",
        option: () => "px-3.5 py-2.5 hover:bg-gray/10 cursor-pointer",
        menuList: () =>
          "bg-white shadow-md border border-black/5 cursor-pointer text-primary rounded-bl-lg rounded-br-lg mt-1 scrollbar",
      }}
    />
  );
};

export default CountrySelect;
