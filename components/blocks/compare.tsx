import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-neutral-100 px-4 py-4 dark:border-neutral-800 dark:bg-neutral-900">
      <Compare
        firstImage="/empty.png"
        secondImage="/full.png"
        firstImageClassName="object-cover object-center"
        secondImageClassname="object-cover object-center"
        className="h-[250px] w-[220px] rounded-3xl md:h-[420px] md:w-[520px]"
        slideMode="hover"
      />
    </div>
  );
}
