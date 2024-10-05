import Link from "next/link";

export default function NotFound() {
  return (
    <main className="fixed top-0 w-full h-full flex justify-center items-center">
      <div className="text-center">
        <h1 className="lg:text-lg md:text-base sm:text-sm xs:text-[0.9rem] font-medium mb-2">
          You are lost in this application bro, but I got you!
        </h1>
        <Link
          className="lg:text-base md:text-sm sm:text-xs xs:text-[0.8rem]"
          href="/"
        >
          return <b className="text-blue-800">Home</b>
        </Link>
      </div>
    </main>
  );
}
