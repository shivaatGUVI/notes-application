"use client";

import {
  NotesContext,
  optionsArray,
  optionsObject,
} from "@/contexts/NotesContext";
import { useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export default function LandingHeader() {
  const { state, changeState } = useContext(NotesContext);
  const [valid, setValid] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useLayoutEffect(() => {
    const validation =
      pathname === "/os" || pathname === "/linux" || pathname === "/next";

    changeState(pathname.substring(1));

    setValid(validation);
  }, []);

  const setSubjectParam = (value) => {
    router.push(`${value}`);
  };

  const onChangeHandler = (event) => {
    const value = event.target.value;
    const index = optionsArray.indexOf(value);
    const subject = optionsArray[index];

    changeState(subject);
    setSubjectParam(subject);
  };

  return (
    <div className="w-10/12 m-auto pb-12 scroll-smooth sticky top-0 flex justify-between items-end mb-4 bg-white dark:bg-darkBackgroundSecondary lg:py-4 xs:py-3">
      <h2 className="lg:text-2xl md:text-xl sm:text-lg xs:text-[1rem] font-medium">
        Contents
      </h2>

      <select
        value={state}
        onChange={onChangeHandler}
        className="py-1 px-2 cursor-pointer outline-none sm:border-[1.5px] xs:border-[1.5px] lg:text-[0.9rem] md:text-[0.9rem] sm:text-[0.8rem] xs:text-[0.7rem] hover:border-slate-500 border-slate-400 dark:hover:border-slate-400 dark:border-slate-600 rounded-md dark:bg-slate-900"
        name="subject"
        id="notes-subject"
      >
        {optionsArray.map((element, index) => {
          return (
            <option key={index} value={element}>
              {optionsObject[element]}
            </option>
          );
        })}
      </select>
    </div>
  );
}
