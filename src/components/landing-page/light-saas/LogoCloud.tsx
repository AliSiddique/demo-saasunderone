import Image from "next/image";
import { FC } from "react";
import Marquee from "react-fast-marquee";

const LogoCloud: FC = () => {
  return (
    <div className="md:max-w-7xl my-10 w-full mx-auto">
      <Marquee direction="left" autoFill pauseOnHover>
        {Images.map((image, index) => (
          <div className="mx-6" key={index}>
            <Image
              src={image.image}
              alt={image.name}
              width={90}
              height={90}
              objectFit="cover"
              className="filter grayscale hover:filter-none transition-all duration-300 cursor-pointer"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoCloud;

const Images = [
  {
    name: "Adobe",
    image: "https://hirewise.lexingtonthemes.com/logos/coinbase.svg",
  },
  {
    name: "Paypal",
    image: "https://hirewise.lexingtonthemes.com/logos/netflix.svg",
  },
  {
    name: "Framer",
    image: "https://hirewise.lexingtonthemes.com/logos/hubspot.svg",
  },
  {
    name: "Github",
    image: "https://hirewise.lexingtonthemes.com/logos/coinbase.svg",
  },
  {
    name: "Atlassian",
    image: "https://hirewise.lexingtonthemes.com/logos/hubspot.svg",
  },
];
