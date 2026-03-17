'use client'

import React from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type TTabVariant = "primary" | "secondary";

export interface ITab {
  title?: string;
  value: string;
  disabled?: boolean;
  icon?: string;
  tooltip?: string;
}

interface TabsProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  tabs: ITab[];
  disabled?: boolean;
  variant?: TTabVariant;
}

interface TabProps extends ITab {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  variant: TTabVariant;
}

const getClasses = (isSelected: boolean, disabled: boolean, variant: TTabVariant) => {
  let classes = `relative overflow-visible box-border font-sans text-sm flex gap-0.5 duration-100 transition-all ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`;
  if (isSelected) {
    if (variant === "primary") {
      classes += " border-b-2 border-primary -mb-0.5";
    } else if (variant === "secondary") {
      classes += " bg-primary text-primary-foreground";
    }
  } else {
    if (variant === "secondary") {
      if (disabled) {
        classes += " bg-muted";
      } else {
        classes += " bg-muted/50";
      }
    }
  }
  if (variant === "primary") {
    classes += " pb-[5px] hover:text-primary";
  } else if (variant === "secondary") {
    classes += " h-6 rounded-md text-[13px] px-1.5 items-center";
  }
  if (disabled) {
    classes += isSelected ? " text-primary" : " text-muted-foreground";
  } else {
    if (variant === "primary") {
      classes += isSelected ? " text-primary font-semibold" : " text-muted-foreground hover:text-foreground";
    } else {
      classes += isSelected ? " text-primary-foreground" : " text-foreground";
    }
  }

  return classes;
};

const Tab = ({
  selected,
  setSelected,
  title,
  value,
  disabled = false,
  icon,
  variant
}: TabProps) => {
  if (!title && !icon) {
    return null;
  }

  return (
    <div
      className={getClasses(selected === value, disabled, variant)}
      onClick={() => {
        if (!disabled) {
          setSelected(value);
        }
      }}
    >
      {icon && <img src={icon} alt={title} width={16} height={16} />}
      <div>{title}</div>
    </div>
  );
};

export const Tabs = ({
  selected,
  setSelected,
  tabs,
  disabled = false,
  variant = "primary"
}: TabsProps) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center",
        disabled && "cursor-not-allowed",
        variant === "primary" ? "gap-6 pb-[1px] border-b border-border" : "gap-2"
      )}
    >
      {tabs.map((tab) => tab.tooltip ? (
        <Tooltip key={tab.value} text={tab.tooltip}>
          <Tab
            selected={selected}
            setSelected={setSelected}
            disabled={disabled || tab.disabled}
            variant={variant}
            {...tab}
          />
        </Tooltip>
      ) : (
        <Tab
          key={tab.value}
          selected={selected}
          setSelected={setSelected}
          disabled={disabled || tab.disabled}
          variant={variant}
          {...tab}
        />
      ))}
    </div>
  );
};
