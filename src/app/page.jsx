"use client";

import Image from "next/image";
import Link from "next/link";
import image from "@/resources/cover-photo.jpg";

export default function Home() {
  return (
    <main className="w-4/5 m-auto flex justify-between items-center">
      <div className="w-1/2  object-cover">
        <Image
          className=""
          src={image}
          alt="cover-photo"
          width="auto"
          height="450"
        />
      </div>
      <div className="w-1/2">
        <p className="mb-16 text-justify">
          Bits, bytes and binary came to life during the later years of my
          Physics graduation. Absurd! but it dates back to my Diploma days in
          Electrical Engineering when transistors were introduced. I never
          thought that the breakdown voltage of a semiconductor would excite me
          more.
        </p>
        <Link
          href="/os"
          className="border-2 text-base sm:p-1 sm:px-3 xs:p-1 xs:px-3 p-2 px-4 rounded-md"
        >
          Read content
        </Link>
      </div>
    </main>
  );
}
