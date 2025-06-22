import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".about",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="relative z-10 xl:mt-20 mt-32 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center">
        {/* left: hero content */}
        <header
          className="about flex flex-col justify-center md:w-full w-screen 
          md:px-20 px-5 absolute xl:top-35  "
        >
          <div className=" flex flex-col gap-7">
            <div className="">
              <h1 className="text-4xl md:text-6xl font-bold text-green-500">
                Frontend
              </h1>
              <h1 className="ml-5 text-4xl md:text-6xl font-bold text-white-50">
                Developer
              </h1>
            </div>
            <p
              className="xl:w-[50%]  text-white-50 md:text-xl  
            text-lg relative z-10 pointer-events-none"
            >
              Hi! I'm{" "}
              <span className="text-green-500 font-bold  ">Raed Yassin</span>. A
              creative{" "}
              <span className="text-green-500 font-bold  ">
                Full Stack Developer
              </span>{" "}
              with a{" "}
              <span className="text-green-500 font-bold italic">
                strong focus on Frontend Development
              </span>{" "}
              and over a <span className="text-green-500 font-bold">year of experience</span> building
              high-performance, scalable, and responsive web solutions. I’m
              passionate about crafting smooth user experiences and writing
              clean, maintainable code across the stack.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my work"
            />
          </div>
        </header>
        {/* right: 3D model */}
        <figure
        // className="z-9"
        >
          <div className="hero-3d-layout cursor-grab  ">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
}
