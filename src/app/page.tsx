import AuthButton from "@/components/Auth/AuthButton/AuthButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute top-0 right-0 p-3 flex space-x-2">
        <Link
          href="/auth/signin"
          className="font-medium py-1 px-2 sm:py-2 sm:px-4 lg:text-xl text-xs hover:text-gray-500 cursor-pointer"
        >
          Login
        </Link>
        <AuthButton path="/auth/signup">Sign Up</AuthButton>
      </div>
      <div className="flex h-full">
        <div className="bg-[#7bc6ef] flex-1 flex items-center justify-center flex-col">
          <div className="flex-1 flex items-center justify-center pt-20">
            <h1 className="text-white md:text-7xl text-3xl text-center">
              AIdea Park
            </h1>
          </div>
          <div className="my-5 p-3">
            <Image
              src="/home-idea.png"
              alt="idea-image"
              width={400}
              height={400}
              priority={true}
            />
            <h1 className="mt-16 pb-20 text-center text-white sm:text-xl text-sm">
              あなたのアイデアに、
              <br />
              さらなる可能性を。
            </h1>
          </div>
        </div>
      </div>
      <div className="m-7">
        <p className="text-sm sm:text-base text-center sm:leading-loose">
          AIdea
          Parkは、日常の中で生まれるアイデアを共有するためのプラットフォームです。
          <br />
          ユーザーによって共有されたアイデアはAIによって融合され、新たなアイデアを生み出します。
          <br />
          あなたのアイデアをAIdea Parkに投稿して、新たな可能性を見つけましょう。
        </p>
      </div>
      <div className="mx-auto mb-20 max-w-prose">
        <h2 className="text-center text-2xl font-bold mt-20 mb-4">使い方</h2>
        <p className="text-sm sm:text-base text-left mt-16 mb-2">
          1. 新規登録orログインします。
        </p>
        <Image
          src="/how-to-use/login-signup.png"
          alt="login-signup"
          width={200}
          height={200}
        />
        <p className="text-sm sm:text-base text-left mt-16 mb-2">
          2. ヘッダーから「投稿する」をクリックし、アイデアを投稿します。
        </p>
        <Image
          src="/how-to-use/postButton.png"
          alt="postButton"
          width={200}
          height={200}
        />
        <p className="text-sm sm:text-base text-left mt-16 mb-2">
          3.「AI」メニューをクリックすると、AIによって融合されたアイデアを閲覧できます。
        </p>
        <Image
          src="/how-to-use/AIMenu.png"
          alt="AIMenu"
          width={150}
          height={150}
        />
        <p className="text-sm sm:text-base text-left mt-16 mb-2">
          4.
          AIページの右下のボタンをクリックすると、AIを使ってアイデアを融合できます。
        </p>
        <Image
          src="/how-to-use/AIButton.png"
          alt="AIButton"
          width={100}
          height={100}
        />
      </div>
      <div className="mt-28 flex justify-center">
        {/* アイデア融合の例をここに記述 */}
        <p className="text-left">
          アイデア融合の例
          <br />
        </p>
      </div>
      <div className="flex justify-center mb-20">
        <Image
          src="/idea-example.png"
          alt="home-example"
          width={600}
          height={600}
          priority={true}
        />
      </div>
    </main>
  );
}
