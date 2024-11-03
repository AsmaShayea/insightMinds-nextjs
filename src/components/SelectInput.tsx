"use client";

import { DropDownIcon } from "@/assets/constants";
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
}
const SelectInput: React.FC<SelectInputProps> = ({ options, placeholder, className, menuPlacement }) => {
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
      menuPlacement={menuPlacement}
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
