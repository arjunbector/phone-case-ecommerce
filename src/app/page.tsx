"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import snake1 from "@/../public/snake-1.png";
import user1 from "@/../public/users/user-1.png";
import user2 from "@/../public/users/user-2.png";
import user3 from "@/../public/users/user-3.png";
import user4 from "@/../public/users/user-4.jpg";
import user5 from "@/../public/users/user-5.jpg";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Check } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, []);
  return (
    <main className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image src={snake1} alt="snake" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight dark:text-gray-100 text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your image on a{" "}
                <span className="bg-green-600 px-2 text-white">custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text=center lg:text-left leading-tight text-balance md:text-wrap">
                Capture your favourite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High quality durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />5 year
                    guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-green-100 object-cover" src={user1} alt="user image" />
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-green-100 object-cover" src={user2} alt="user image" />
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-green-100 object-cover" src={user3} alt="user image" />
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-green-100 object-cover" src={user4} alt="user image" />
                  <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-green-100 object-cover" src={user5} alt="user image" />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
