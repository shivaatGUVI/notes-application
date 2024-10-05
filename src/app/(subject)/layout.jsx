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
      <section className="lg:w-10/12 md:w-10/12 sm:w-10/12 xs:w-10/12 m-auto lg:mb-12 md:mb-12 sm:mb-12 pb-10 xs:pb-12 bg-white dark:bg-transparent">
        {children}
      </section>
    </section>
  );
}
