import AuthButton from "@/components/AuthButton/AuthButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute top-0 right-0 p-3 flex space-x-2">
        <AuthButton path="/auth/signin">Sign In</AuthButton>
        <AuthButton path="/auth/signup">Sign Up</AuthButton>
      </div>
      <div className="flex h-4/6">
        <div className="bg-[#a2dbfa] flex-1 flex items-center justify-center flex-col">
          <div className="my-20 p-3">
            <Image src="/home-idea.png" alt="idea-image" width={300} height={300} priority={true}/>
            <h1 className="mt-4 text-center text-white sm:text-xl text-sm">あなたのアイデアに、<br />さらなる可能性を。</h1>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-[#a2dbfa] md:text-7xl text-3xl text-center font-ibm border-b-2 border-[#a2dbfa]">AIdea Park</h1>
        </div>
      </div>
      <div className="m-7">
        <p className="text-center">あなたのアイデアは、新しいアイデアへの道しるべとなります。<br/>
        ユーザーによって共有されたアイデアはAIによって融合され、新しいアイデアを発見できます。</p>
      </div>
      <div>
        {/* アイデア融合の例をここに記述 */}
        <p className="text-center">
          aaaaaaaaaaaaaaaaaaa<br />
          aaaaaaaaaaaaaaaaaaaaaaaa<br />
          aaaaaaaaaaaaaaaaaaaaaaaaaaa<br />
          bbbbbbbbbbbbbbbbbbbbbbbbbbbb<br />
          bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb<br />
          ccccccccccccccccccccccccccccccccccccccc<br />
          ccccccccccccccccccccccccccccccccccccccccc<br />
        </p>
      </div>
    </main>
  );
}
