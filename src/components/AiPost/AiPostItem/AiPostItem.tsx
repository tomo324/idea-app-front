import { AiPost } from "@/interface/post-interface";
import AccordionItem from "../AccordionItem/AccordionItem";

const AiPostItem = ({ aiPost }: { aiPost: AiPost }) => {
  if (!aiPost) {
    return null;
  }

  return (
    <div className="max-w-md md:max-w-2xl bg-white rounded-xl shadow-md overflow-hidden m-3">
      <div className="p-8 flex flex-col flex-wrap">
        <div
          style={{ overflowWrap: "anywhere" }}
          className="tracking-wide text-sm text-indigo-500 font-semibold whitespace-normal"
        >
          Created by AI
        </div>
        <p
          style={{ overflowWrap: "anywhere" }}
          className="block mt-3 text-lg leading-tight font-medium text-black whitespace-break-spaces"
        >
          {aiPost.content}
        </p>
        <div className="flex mt-2 justify-between">
          <p className="text-gray-500">{aiPost.createdAt}</p>
        </div>
        <AccordionItem post={aiPost.posts[0]} order={"1"} />
        <AccordionItem post={aiPost.posts[1]} order={"2"} />
      </div>
    </div>
  );
}

export default AiPostItem;
