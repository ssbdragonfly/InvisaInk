
import * as React from "react";
import { Slider } from "@/components/ui/slider";
import * as SliderPrimitive from "@radix-ui/react-slider";

interface SliderWithLabelProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  label: string;
  value: number[];
  setValue: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  valueLabel?: string;
}

export function SliderWithLabel({
  label,
  value,
  setValue,
  min = 0,
  max = 100,
  step = 1,
  valueLabel = "",
  ...props
}: SliderWithLabelProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium text-muted-foreground">{label}</label>
        <span className="text-sm font-medium">
          {value[0]}
          {valueLabel}
        </span>
      </div>
      <Slider
        defaultValue={value}
        value={value}
        onValueChange={setValue}
        min={min}
        max={max}
        step={step}
        {...props}
      />
    </div>
  );
}
