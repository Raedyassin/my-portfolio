import TitleHeader from "../components/TitleHeader";
import {
  frontendSkills,
  backendSkills,
  databaseSkills,
  toolSkills,
} from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Stack from "../components/Stack";
export default function Skills() {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <section id="skills" className="scroll-mt-24 flex-center mb-20 section-padding">
      <div className="w-full h-full md:px-10 px-5 space-y-7 md:space-y-15">
        <TitleHeader title="My Stack" />
        <Stack stackName="Frontend" stackSkills={frontendSkills} />
        <Stack stackName="Backend" stackSkills={backendSkills} />
        <Stack stackName="Database" stackSkills={databaseSkills} />
        <Stack stackName="Tools" stackSkills={toolSkills} />
      </div>
    </section>
  );
}
