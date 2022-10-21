import React from "react";
import Title from "../../ui/Title";
import { Carousel } from "react-responsive-carousel";
import Card from "./Card";

const Testimonials = () => {
  const testmonials = [
    {
      name: "Ashraful Hasan",
      position: "Founder and Lead Consultant at Impactrio",
      description:
        'You rarely come across standout talent like Saifil. He expertly filled the role of User Experience Design Intern at Impactrio for my company’s "Impactraction," formerly "Wheel for Change" team. He, with other collaborators, took the idea of the solution and designed, wire framed, created the MVP of the app. Not only did Saifil show initiative in building out our UI/UX architecture from scratch, but he also played a huge role in bringing innovative features from a design perspective.',
    },
    {
      name: "Rakesh Gusain",
      position: "Director at BPM-D",
      description:
        "Saifil is smart, creative and professional. He has helped shape the BPM-D App and has played a crucial role in designing the user interface. He is dedicated and a pleasure to work with. He has been helpful, energetic and dedicated to all the work assigned to him and helped shaping the BPM-D India team. I will be happy to recommend saifil to any organisation that appreciates creativity and needs design thinkers.",
    },
    {
      name: "Rehban Khatri",
      position: "Technical Consultant at BPM-D",
      description:
        "Saifil is a great team player to work with. Brings Exciting and Innovative Ideas constantly in the team to drive any project he's a part of. Has quality skills in UI/UX with a good amount of experience in designing Web pages for our product. He's Smart and thinks at right pace in the right place. It was a pleasure to work with him in all the projects we were in together",
    },
  ];

  return (
    <div className="py-10 md:px-32 flex flex-col px-5 items-center">
      <div className="h-[calc(100vh-3.5rem)] max-w-3xl flex w-full flex-col justify-center items-baseline space-y-4 md:h-auto">
        <Title label="Testimonials" isCentered={true} />
        <p className="text-center">What people say about me?</p>
        <Carousel dynamicHeight={true} >
          {testmonials.map((testimonial, index) => (
            <Card key={index} testimonial={testimonial} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
