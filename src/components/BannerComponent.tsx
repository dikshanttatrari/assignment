import React from "react";
import { MdEdit } from "react-icons/md";

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  background: string;
  onEdit: () => void;
}

export default function BannerComponent({
  title,
  description,
  cta,
  background,
  onEdit,
}: BannerProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[350px] w-full rounded-lg overflow-hidden shadow-lg"
    >
      <div className="p-4">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl font-bold text-black">{title}</h1>
          <MdEdit
            className="text-3xl cursor-pointer text-black"
            onClick={onEdit}
          />
        </div>
        <div className="mt-6">
          <p className="text-lg font-semibold text-black">{description}</p>
        </div>
        <div className="mt-6 bg-purple-400 rounded-lg inline-block px-4 py-2">
          <button className="text-white">{cta}</button>
        </div>
      </div>
    </div>
  );
}
