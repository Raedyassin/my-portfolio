import Button from "../components/Button.jsx";
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
    <section id="hero" className="scroll-mt-24 relative min-h-[80vh] ">
      <div className="absolute -top-30 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div
        className="relative  mt-32  z-150
        flex flex-col xl:flex-row xl:gap-0 gap-5 justify-between items-center"
      >
        {/* left: hero content */}
        <header
          className="about flex flex-col justify-center w-full  
          md:px-20 px-5  xl:w-3/5  "
          // absolute xl:top-35
        >
          <div className="relative z-10 flex flex-col gap-7">
            <div className="">
              <h1 className="text-4xl md:text-6xl font-bold text-green-500">
                Frontend
              </h1>
              <h1 className="ml-5 text-4xl md:text-6xl font-bold text-white-50">
                Developer
              </h1>
            </div>
            <p
              className="  text-white-50 md:text-xl  
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
              and over a{" "}
              <span className="text-green-500 font-bold">
                year of experience
              </span>{" "}
              building high-performance, scalable, and responsive web solutions.
              I’m passionate about crafting smooth user experiences and writing
              clean, maintainable code across the stack.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="projects"
              text="See my work"
            />
          </div>
        </header>
        {/* right: hero image */}
        <div className="flex flex-col items-center p-10">
          <div className=" flex gap-5 flex-col ">
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTY4OWQ2a3h5Z3g2Zng3OXB3NDg3cmMyYmFmNWczd2Zicnhob2RmaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"
              alt="hero"
            />
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODhldG5hYnRvZ3VkOGU5MG1nOWlpY29rZ2F3cGp2dThieWU0dHpmdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MYI6NK4JOGpOzOriEg/giphy.gif"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
