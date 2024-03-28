"use client"
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const {isRed, setIsRed} = useState(false)

  return (
    <main>
      <div className="flex justify-center gap-[10rem] p-[10rem]">

        <div className="w-[10rem] h-[10rem] bg-[#eb4034] cursor-pointer">
        </div>

        <div className="w-[10rem] h-[10rem] bg-[#348feb] cursor-pointer">
        </div>

        <div className="w-[10rem] h-[10rem] bg-[#32d132] cursor-pointer">
        </div>

        <div className="w-[10rem] h-[10rem] bg-[#eb8034] cursor-pointer">
        </div>
        
      </div>
    </main>
  );
}
