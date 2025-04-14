import Image from "next/image";
import React from "react";

const images = [
  {
    src: "/images/property/one_property.jpg",
    alt: "Main property image",
  },
  {
    src: "/images/property/one_property_image_2.jpg",
    alt: "Property image 1",
  },
  {
    src: "/images/property/one_property_image_3.jpg",
    alt: "Property image 2",
  },
  {
    src: "/images/property/one_property_image_4.jpg",
    alt: "Property image 3",
  },
];

const Gridview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[650px_1fr] min-xl:gap-1 h-[420px] rounded-2xl overflow-hidden">
      <div className="relative w-full h-full group">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover cursor-pointer transition-opacity group-hover:opacity-75"
          priority
        />
        <div className="absolute inset-0 cursor-pointer bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="flex flex-col gap-1 max-xl:hidden">
        {images.slice(1).map((image, index) => (
          <div key={index} className="relative w-full h-1/3 group">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover cursor-pointer transition-opacity "
            />
            <div className="absolute inset-0 cursor-pointer bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gridview;
