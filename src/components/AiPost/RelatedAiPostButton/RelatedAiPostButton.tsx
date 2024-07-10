import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const RelatedAiPostButton = ({ id }: { id: number }) => {
  const router = useRouter();

  const navigateToPost = () => {
    router.push(`/ai-posts/related?id=${id}`);
  };

  return (
    <div
      className="bg-blue-400 text-white hover:bg-blue-300 rounded-full border inline-block p-1"
      onClick={navigateToPost}
    >
      <Icon
        icon="hugeicons:ai-chat-02"
        className="sm:text-2xl text-xl inline-block"
      />
    </div>
  );
};

export default RelatedAiPostButton;
