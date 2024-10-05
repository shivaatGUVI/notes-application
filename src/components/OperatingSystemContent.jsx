import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

async function getData(fileName) {
  try {
    const request = await fetch(
      `${process.env.BACKEND_API}/file-content?file=${fileName}`
    );

    const response = await request.json();
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export default async function OperatingSystemContent({ name }) {
  const fileContent = await getData(name);
  const metaData = matter(fileContent);

  return (
    <>
      <div className="w-full lg:mb-6 md:mb-6 sm:mb-5 xs:mb-3 sticky top-0 py-4 bg-white dark:bg-darkBackgroundSecondary">
        <h2 className="underline underline-offset-4 xs:underline-offset-1 lg:text-xl md:text-lg sm:text-md xs:text-[1rem] text-center font-medium tracking-normal">
          {metaData?.data.title}
        </h2>
      </div>
      <div>
        <div>
          <Markdown className="text-black dark:text-white dark:prose-invert prose lg:prose-md md:prose-md sm:prose-sm xs:prose-sm">
            {metaData?.content}
          </Markdown>
        </div>
      </div>
    </>
  );
}
