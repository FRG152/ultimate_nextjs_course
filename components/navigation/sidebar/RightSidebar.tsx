import Link from "next/link";
import Image from "next/image";
import ROUTES from "@/constants/routes";
import TagCard from "@/components/cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "How to create a custom hook in React?" },
  { _id: "2", title: "What is the difference between Server and Client Components in Next.js?" },
  { _id: "3", title: "How to center a div with Tailwind CSS?" },
  { _id: "4", title: "How do I protect routes with NextAuth v5?" },
  { _id: "5", title: "When should I use useMemo vs useCallback?" },
];

const popularTags = [
  { _id: "1", name: "react", questions: 100 },
  { _id: "2", name: "javascript", questions: 200 },
  { _id: "3", name: "typescript", questions: 150 },
  { _id: "4", name: "nextjs", questions: 50 },
  { _id: "5", name: "tailwindcss", questions: 75 },
];

const RightSidebar = () => {
  return (
    <aside className="background-light900_dark200 custom-scrollbar shadow-light-300 sticky top-21 flex h-[calc(100vh-84px)] w-87.5 flex-col px-6 pt-10 pb-8 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-7.5">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image src={"/icons/chevron-right.svg"} alt="Chevron" width={20} height={20} className="invert-colors" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard key={_id} _id={_id} name={name} questions={questions} showCount compact />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
