"use client";

import { DropDownIcon } from "@/assets/constants";
import Image from "next/image";
import { ReactNode, useId } from "react";
import Select, { components, DropdownIndicatorProps, MenuPlacement } from "react-select";
interface OptionType {
  value: string;
  label: string | ReactNode;
  flag?: string;
}
const DropdownIndicator: React.FC<DropdownIndicatorProps<OptionType>> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  );
};

interface SelectInputProps {
  options: OptionType[];
  placeholder?: string;
  className?: string;
  menuPlacement?: MenuPlacement;
  defaultValue: OptionType;
}

const formatOptionLabel = ({ label, flag }: OptionType) => (
  <div className="flex items-center gap-2">
    {flag && <Image src={flag || ""} alt="flag-one" width={24} height={20} className="rounded-sm" />}
    <span className="text-sm leading-[18px] font-regular text-right">{label}</span>
  </div>
);

const SelectInput: React.FC<SelectInputProps> = ({ options, placeholder, className, menuPlacement, defaultValue }) => {
  return (
    <Select
      isRtl
      options={options}
      instanceId={useId()}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator,
      }}
      isSearchable={false}
      formatOptionLabel={formatOptionLabel}
      menuPlacement={menuPlacement}
      defaultValue={defaultValue}
      onChange={(selectedOption) => console.log(selectedOption)}
      unstyled
      styles={{
        control: (base) => ({
          ...base,
          height: "auto",
          minHeight: "auto",
        }),
      }}
      placeholder={placeholder}
      classNames={{
        control: () => className || "",
        placeholder: () => "text-black/50",
        option: () => "px-3.5 py-2.5 hover:bg-gray/10 cursor-pointer",
        menuList: () =>
          "bg-white shadow-md border border-black/5 cursor-pointer text-primary rounded-bl-lg rounded-br-lg mt-1 scrollbar",
      }}
    />
  );
};

export default SelectInput;
