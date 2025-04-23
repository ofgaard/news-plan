import prisma from "@/lib/prisma";

const Page = async () => {
  const stories = await prisma.story.findMany();
  console.log(stories);
  return (
    <div>
      Hello world
    </div>
  );
};

export default Page;