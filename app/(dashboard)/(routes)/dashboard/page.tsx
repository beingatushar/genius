"use client";

import { FaArrowRight as ArrowRight } from 'react-icons/fa';
import { useRouter } from "next/navigation";

import { tools } from "@/constants";
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Unleash the potential of AI

        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Engage in conversation with cutting-edge AI technology - Embrace the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-0 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 md:gap-2">
        {
          tools.map(tool => (
            <Link href={tool.href} className="p-1" key={tool.href} ><ImageCard title={tool.label} description={tool.description} image={tool.image} /></Link>
          ))
        }
      </div>



    </div>
  );

}
const ImageCard = ({ title, description, image }: { title: string; description: string, image: string }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full bg-white text-black cursor-pointer transition-transform transform hover:translate-y-[-5px]">
      <div className="aspect-w-16 aspect-h-9">
        <img className="object-cover w-full h-[140px]" src={image} alt={title} />
      </div>
      <div className="px-4 py-3">
        <div className="font-bold text-xl mb-2 text-center h-[50px]">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};