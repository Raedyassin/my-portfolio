import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Stack({ stackSkills, stackName }) {
  const containerRef = useRef(null); // this stack instance

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(
        ".stack-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: true, 
          },
        }
      );

      // Animate skills
      gsap.fromTo(
        ".stack-skill",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 65%",
            scrub: true, // ✅ Key change
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  
  return (
    // <div ref={containerRef} className="w-full flex flex-col md:flex-row md:gap-15  mb-10">
    <div ref={containerRef} className="w-full grid grid-cols-1 lg:grid-cols-4  mb-10">
      <h2 className="stack-header text-zinc-200 font-bold md:text-4xl 
        text-2xl uppercase my-3 w-[170px] md:w-[20%]">
        {stackName}
      </h2>
      <div className="col-span-3 flex ml-2 flex-wrap justify-start">
        {stackSkills.map((skill, index) => (
          <div
            key={index}
            className="stack-skill my-4 mx-4 flex items-center gap-2"
          >
            <img className="md:size-15 size-10" src={skill.imgPath} />
            <div className="text-white-50 md:text-2xl text-lg font-semibold">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
