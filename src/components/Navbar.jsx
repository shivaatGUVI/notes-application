"use client";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from ".";

export default function Navbar(props) {
  const route = props.route ?? "/";
  const [state, setState] = useState("Computer Science");

  // const [time, setTime] = useState(0);

  // setInterval(() => {
  //   if (time) {
  //     setState("Electrical Engineer");
  //     setTime(0);
  //   } else {
  //     setState("Computer Science");
  //     setTime(1);
  //   }
  // }, 5000);

  return (
    <nav
      className={`dark:border-none border dark:bg-gray-950 p-2 px-4 flex justify-between items-center lg:mb-6 md:mb-5 sm:mb-4 xs:mb-3 z-50`}
    >
      <div className="w-1/2">
        <Link href={route} title="Home">
          <h1 className="lg:text-xl md:text-lg sm:text-base xs:text-[1.1rem] font-bold">
            Shiva Sunchu
          </h1>
        </Link>
      </div>
      <div className="w-fit flex lg:gap-x-4 md:gap-x-4 sm:gap-x-3 xs:gap-x-2  items-center">
        <ThemeToggle />
        <p className="text-base xs:text-[0.9rem] font-normal">{state}</p>
      </div>
    </nav>
  );
}
