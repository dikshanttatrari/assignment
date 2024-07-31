"use client";
import React, { useState } from "react";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import BannerComponent from "@/components/BannerComponent";
import EditBanner from "@/components/EditBanner";

const bannerData = [
  {
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    cta: "Learn More",
    background: banner2.src,
  },
  {
    title: "Increase Sales",
    description: "AI-driven Sales Solutions",
    cta: "Get Started",
    background: banner3.src,
  },
  {
    title: "Boost Your Leads",
    description: "Harness AI for Effective Campaigns",
    cta: "Learn More",
    background: banner4.src,
  },
  {
    title: "Increase Sales",
    description: "AI-driven Sales Solutions",
    cta: "Get Started",
    background: banner3.src,
  },
];

export default function Home() {
  const [banners, setBanners] = useState(bannerData);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleEdit = (index: number) => {
    setEditIndex(index);
  };

  const handleSave = (data: {
    title: string;
    description: string;
    cta: string;
    background: string;
  }) => {
    const newBanners = [...banners];
    if (editIndex !== null) {
      newBanners[editIndex] = data;
      setBanners(newBanners);
    }
    setEditIndex(null);
  };

  return (
    <div className="container mx-auto my-8 px-4 md:px-24">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8">
        {banners.map((banner, index) => (
          <BannerComponent
            key={index}
            {...banner}
            onEdit={() => handleEdit(index)}
          />
        ))}
      </div>
      {editIndex !== null && (
        <EditBanner
          initialData={banners[editIndex]}
          onSave={handleSave}
          onClose={() => setEditIndex(null)}
        />
      )}
    </div>
  );
}
