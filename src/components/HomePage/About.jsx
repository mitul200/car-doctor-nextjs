import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" w-full h-screen mt-20">
      <div className=" container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <Image
              src={"/assets/images/about_us/person.jpg"}
              alt=""
              className=" rounded-xl"
              height={460}
              width={473}
            />
            <div className="border border-l-teal-50 border-solid absolute -bottom-14 right-32">
              <Image
                src={"/assets/images/about_us/parts.jpg"}
                alt=""
                className=""
                height={327}
                width={332}
              />
            </div>
          </div>
          <div> content</div>
        </div>
      </div>
    </div>
  );
};

export default About;
