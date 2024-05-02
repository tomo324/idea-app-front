import { useFetchUserNameById } from "@/hooks/user/useFetchUserNameById";
import { Post } from "@/interface/post-interface";
import React, { useRef } from "react";

const AccordionItem = ({ post, order }: { post: Post; order: string }) => {
  const childElement = useRef<HTMLDivElement>(null);

  const { authorName } = useFetchUserNameById(post.authorId);

  const onClickAccordionToggle = (
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const details = childElement.current?.parentNode as HTMLDetailsElement;
    const content = details?.querySelector<HTMLDivElement>("summary + div");

    // 閉じる場合のキーフレーム
    const closingAnimation = (content: HTMLElement) => [
      {
        height: `${content.offsetHeight}px`,
        opacity: 1,
      },
      {
        height: 0,
        opacity: 0,
      },
    ];

    // 開く場合のキーフレーム
    const openingAnimation = (content: HTMLElement) => [
      {
        height: 0,
        opacity: 0,
      },
      {
        height: `${content.offsetHeight}px`,
        opacity: 1,
      },
    ];

    // アニメーションタイミング
    const animation = {
      duration: 100,
      easing: "ease-out",
    };

    if (details.open) {
      if (content) {
        content.animate(closingAnimation(content), animation).onfinish = () => {
          details.removeAttribute("open"); // アニメーション完了後にopen属性を削除
        };
      }
    } else {
      content?.animate(openingAnimation(content), animation);
      details.setAttribute("open", "true");
    }
  };

  return (
    <details>
      <summary
        className="cursor-pointer mt-2 text-blue-500"
        onClick={onClickAccordionToggle}
      >
        元になったpost {order}
      </summary>
      <div className="bg-blue-50 rounded-md shadow-sm p-3" ref={childElement}>
        <p className="text-sm text-indigo-500 font-semibold">{authorName}</p>
        <p className="mt-1">{post.content}</p>
        <p className="text-gray-500 mt-1">{post.createdAt}</p>
      </div>
    </details>
  );
};

export default AccordionItem;
