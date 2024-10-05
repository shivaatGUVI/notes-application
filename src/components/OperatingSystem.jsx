import Link from "next/link";

async function getData() {
  try {
    const request = await fetch(`${process.env.BACKEND_API}/contents`, {
      cache: "force-cache", // Ensures data is cached and not refetched after deployment
    });

    const response = await request.json();

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export default async function OperatingSystem() {
  const responseData = await getData();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:gap-6 md:gap-5 sm:gap-4 xs:gap-5">
      {responseData &&
        responseData?.map((element, index) => {
          element.date = new Date(element.date);
          return (
            <div
              key={index}
              id={element.slug}
              className="target:border-blue-800 target:border-[1px] scroll-mt-16
              border-2 xs:border-[1.5px] p-8 px-4 sm:p-4 xs:p-3 hover:border-slate-500  border-slate-400 dark:hover:border-slate-400 dark:border-slate-600 rounded-md bg-white dark:bg-gray-900"
            >
              <div title={element.title} className="mb-2 xs:mb-[0.6rem]">
                <h3 className="w-full text-pretty lg:text-lg md:text-base sm:text-sm xs:text-[0.8rem] font-semibold tracking-normal ease-in-out">
                  <Link
                    className="hover:text-blue-800 dark:hover:text-blue-500"
                    href={`os/${element.slug}`}
                  >
                    {element.title}
                  </Link>
                </h3>

                <p className="text-slate-400 text-xs xs:text-[0.6rem] font-normal tracking-wide">
                  {`${
                    element.date.getDate() < 10
                      ? `0${element.date.getDate()}`
                      : element.date.getDate()
                  } ${element.date.toLocaleString("default", {
                    month: "short",
                  })} ${element.date.getFullYear()}`}
                </p>
              </div>
              <p className="text-xs xs:text-[0.7rem] font-medium sm:tracking-wide">
                {element.subtitle}
              </p>
            </div>
          );
        })}
    </div>
  );
}
