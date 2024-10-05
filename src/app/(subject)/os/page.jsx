import { OperatingSystem } from "@/components";
import { Suspense } from "react";

export default function OperatingSystemPage() {
  return (
    <>
      <Suspense>
        <OperatingSystem />
      </Suspense>
    </>
  );
}
