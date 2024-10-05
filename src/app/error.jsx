"use client";
import Link from "next/link";

export default function Error() {
  return (
    <main className="fixed  top-0 w-full h-full flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-lg font-medium mb-2">
          Trying to access things that are not here, just like her feelings for
          you!
        </h1>
        <Link href="/">
          return <b className="text-blue-800">Home</b>
        </Link>
      </div>
    </main>
  );
}
