import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { projectStacks, frontendProjects, backendProjects } from "../constants";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import ProjectHeaderSection from "../components/ProjectHeaderSection";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";

export default function Projects() {
  

  const imageRefs = useRef([]);

  const handleEnter = (index) => {
    gsap.fromTo(
      imageRefs.current[index],
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      }
    );
  };

  const handleLeave = (index) => {
    gsap.to(imageRefs.current[index], {
      x: 100,
      opacity: 0,
      duration: 0.01,
      ease: "power4.in",
    });
  };
  const [stackindex, setStackIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(-1);
  // const [showProject, setShowProject] = useState(-1);
  const handleClick = (index) => {
    setIsOpen(-1);
    setStackIndex(index);
  };

  return (
    <section
      id="projects"
      className="scroll-mt-24 mx-5 md:mx-10 flex flex-col my-20 md:mb-20 section-padding"
    >
      <div className="w-full h-full md:px-10 px-5 space-y-7 mb-5 md:mb-10">
        <TitleHeader title="SELECTED PROJECTS " />
      </div>
      <div className="mt-10 flex flex-row gap-6 ">
        {projectStacks.map((stack, index) => (
          <button
            onClick={() => handleClick(index)}
            className={` ${
              stackindex === index
                ? "bg-green-600 text-white"
                : "bg-black text-white"
            } py-2 px-4 rounded-lg cursor-pointer`}
            key={index}
          >
            {stack}
          </button>
        ))}
      </div>

      <div>
        {stackindex === 0 ? (
          <div>
            {frontendProjects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => isOpen !== index && handleEnter(index)}
                onMouseLeave={() => handleLeave(index)}
                className=" relative"
              >
                {/* <div
                    style={{ opacity: 0 }}
                    ref={(el) => (imageRefs.current[index] = el)}
                    className=" image absolute to-0 right-[8.5%]  w-100 z-30"
                  >
                    <img src={project.pages[0]} alt={project.name} />
                  </div> */}
                <div
                  onClick={() => {
                    handleLeave(index);
                    setIsOpen(isOpen === index ? -1 : index);
                  }}
                  className="pt-5 md:mx-5 flex flex-wrap items-center cursor-pointer gap-2 md:gap-5"
                >
                  <h1
                    className={`font-bold  ${
                      isOpen === index ? "text-green-600" : "text-white"
                    } text-xl md:text-3xl transition duration-500 ease-in-out`}
                  >
                    {project.name}
                  </h1>
                  {isOpen === index ? (
                    <TiArrowSortedUp className="text-2xl md:text-4xl text-green-600 cursor-pointer z-0" />
                  ) : (
                    <TiArrowSortedDown className="text-2xl md:text-4xl text-white cursor-pointer z-0" />
                  )}
                  <a
                    href={project.gitHubLink}
                    className="cursor-pointer z-10"
                    target="_blank"
                  >
                    <FaGithub
                      size={25}
                      className="text-white cursor-pointer
                  transition duration-500 ease-in-out hover:text-green-600"
                    />
                  </a>
                </div>
                {isOpen === index && (
                  <div className="mx-5 mt-5 ">
                    <p className="text-white  w-full md:w-[80%] text-base md:text-lg">
                      {project.description}
                    </p>
                    <div className="fontbold">
                      <ProjectHeaderSection title="Technologies" />
                      <div className="flex flex-row flex-wrap gap-2">
                        {project.Technologies.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 md:p-2 text-base md:text-lg font-semibold bg-white-50 rounded-2xl text-black-50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <ProjectHeaderSection title="Worked On" />
                      <ul className="list-disc ml-5">
                        {project.workedOn.map((work, index) => (
                          <li className="text-base md:text-lg" key={index}>
                            {work}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <ProjectHeaderSection title="Pages" />
                      <div className="flex flex-row flex-wrap gap-2">
                        {project.pages.map((page, index) => (
                          <div key={index} className=" min-h-50 w-100">
                            <img src={page} className="" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div className="border-b-2 pt-5 border-white md:mx-5 w-[90%] " />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {backendProjects.map((project, index) => (
              <div key={index} className=" relative">
                <div
                  onClick={() => {
                    handleLeave(index);
                    setIsOpen(isOpen === index ? -1 : index);
                  }}
                  className="pt-5 md:mx-5 flex flex-wrap items-center cursor-pointer gap-2 md:gap-5"
                >
                  <h1
                    className={`font-bold text-xl md:text-3xl ${
                      isOpen === index ? "text-green-600" : "text-white"
                    } transition duration-500 ease-in-out`}
                  >
                    {project.name}
                  </h1>
                  {isOpen === index ? (
                    <TiArrowSortedUp className="text-2xl md:text-4xl text-green-600 cursor-pointer z-0" />
                  ) : (
                    <TiArrowSortedDown className="text-2xl md:text-4xl text-white cursor-pointer z-0" />
                  )}
                  <a
                    href={project.gitHubLink}
                    className="cursor-pointer z-10"
                    target="_blank"
                  >
                    <FaGithub
                      size={25}
                      className="text-white cursor-pointer
                  transition duration-500 ease-in-out hover:text-green-600"
                    />
                  </a>
                </div>
                {isOpen === index && (
                  <div className="mx-5 mt-5 ">
                    <p className="text-white w-full md:w-[80%] text-base md:text-lg">
                      {project.description}
                    </p>
                    <div className="fontbold">
                      <ProjectHeaderSection title="Technologies" />
                      <div className="flex flex-row flex-wrap gap-2">
                        {project.Technologies.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 md:p-2 text-base md:text-lg font-semibold bg-white-50 rounded-2xl text-black-50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <ProjectHeaderSection title="Worked On" />
                      <ul className="list-disc ml-5">
                        {project.workedOn.map((work, index) => (
                          <li className="text-base md:text-lg" key={index}>
                            {work}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                <div className="border-b-2 pt-5 border-white md:mx-5 w-[90%] " />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
