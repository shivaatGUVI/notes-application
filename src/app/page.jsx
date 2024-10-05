"use client";

import Image from "next/image";
import Link from "next/link";
import image from "@/resources/cover-photo.jpg";

export default function Home() {
  const introduction = "< Introduction />";
  return (
    <main className="lg:mt-12 md:mt-10 sm:mt-8 xs:mt-8 w-5/6 m-auto">
      <div className="lg:mb-6 md:mb-6 sm:mb-6 xs:mb-5">
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl font-bold">
          {introduction}
        </h2>
      </div>

      <div className="lg:mb-14 md:mb-14 sm:mb-12 xs:mb-10 lg:w-3/4 md:w-full sm:w-full xs:w-full text-justify">
        <h3 className="lg:text-2xl md:text-xl sm:text-lg xs:text-lg font-semibold lg:mb-3 md:mb-3 sm:mb-2 xs:mb-2">
          🎗️ Hi, my name is Shiva
        </h3>
        <p className="lg:text-base md:text-base sm:text-sm xs:text-xs lg:leading-7 md:leading-7 sm:leading-6 xs:leading-5 tracking-normal lg:mb-7 md:mb-6 sm:mb-6 xs:mb-5">
          Bits, bytes and binary came to life during the later years of my
          Physics graduation. Absurd! but it dates back to my Diploma days in
          Electrical Engineering when transistors were introduced. I never
          thought that the breakdown voltage of a semiconductor would excite me
          more.
        </p>

        <Link
          href="/os"
          className="border-[1.4px] dark:bg-darkBackgroundPrimary 
          dark:border-[1.4px] font-medium rounded-md lg:p-2 md:p-2 sm:p-2 xs:p-2 lg:px-4 md:px-4 sm:px-3 xs:px-3 lg:text-sm md:text-sm sm:text-xs xs:text-[0.7rem] hover:border-slate-600 border-slate-500 dark:hover:border-slate-400 dark:border-slate-500"
        >
          Read content
        </Link>
      </div>

      <div className="lg:w-3/4 md:w-full sm:w-full xs:w-full text-justify">
        <h3 className="lg:text-2xl md:text-xl sm:text-lg xs:text-lg font-semibold lg:mb-3 md:mb-3 sm:mb-2 xs:mb-2">
          🗺️ Where I&apos;m from
        </h3>
        <p className="lg:text-base md:text-base sm:text-sm xs:text-xs lg:leading-7 md:leading-7 sm:leading-6 xs:leading-5 tracking-normal">
          I have been in <b>Mumbai, Maharashtra</b> my whole life. I know where
          the famous Ashok Vadapav shop is, it is in front of my degree college.
        </p>
      </div>

      {/* <div>
        <h3>🌱 Things about me</h3>
        <table>
          <thead>
            <tr>
              <th>Music</th>
              <th>Movies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>Hip hop</li>
                  <li></li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>The Before trilogy </li>
                  <li>Portrait of a Lady on Fire</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </main>
  );
}
