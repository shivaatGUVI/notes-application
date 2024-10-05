"use client";

import { LandingHeader } from "@/components";
import NotesContextProvider from "@/contexts/NotesContext";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export default function Layout({ children }) {
  const pathname = usePathname();

  const enableLayout =
    pathname === "/os" || pathname === "/linux" || pathname === "/next";

  return (
    <section>
      {enableLayout && (
        <NotesContextProvider>
          <Suspense>
            <LandingHeader />
          </Suspense>
        </NotesContextProvider>
      )}
      <div className="w-10/12 m-auto pb-12 scroll-smooth">{children}</div>
    </section>
  );
}
