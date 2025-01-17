import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className=" container mx-auto mt-10">
      <div className="carousel w-full ">
        {bannars.map((bannar, index) => (
          <div
            style={{
              background: `linear-gradient(45deg, rgba(7, 25, 0, 0.7), rgba(0, 0, 0, 0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
            key={index + 1}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[90vh] bg-bottom bg-no-repeat bg-cover rounded-lg"
          >
            <div className="h-full w-full flex items-center pl-36">
              <div className=" space-y-6">
                <h1 className=" text-4xl text-white font-bold">
                  {bannar.title}
                </h1>
                <p className=" text-white"> {bannar.description}</p>
                <div className=" space-x-4">
                  <button className=" btn btn-primary ">Discrover More</button>
                  <button className=" btn btn-primary btn-outline">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute space-x-10 bottom-14 right-20 flex transform justify-between">
              <a href={bannar.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={bannar.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const bannars = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
    image: "",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
    image: "",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
    image: "",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
    image: "",
  },
];
export default Banner;
