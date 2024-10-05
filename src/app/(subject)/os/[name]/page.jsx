import { OperatingSystemContent } from "@/components";

export const generateStaticParams = async () => {
  try {
    const request = await fetch(`${process.env.BACKEND_API}/contents`, {
      cache: "force-cache", // Ensures data is cached and not refetched after deployment
    });

    const response = await request.json();

    return response.data.map((post) => ({
      name: post.slug,
    }));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default function OperatingSystemNotes(props) {
  const name = props.params.name;
  return (
    <>
      <OperatingSystemContent name={name} />
    </>
  );
}
