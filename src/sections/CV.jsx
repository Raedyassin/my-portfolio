import { useGSAP } from '@gsap/react';
import TitleHeader from '../components/TitleHeader'
import { cvs } from '../constants'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function CV() {

  useGSAP(() => {
    gsap.fromTo(
      "#cv",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#cv",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });
  return (
    <section
      id="cv"
      className="scroll-mt-24 flex mb-10 flex-col section-padding "
    >
      <TitleHeader title="See My CV" />
      <div className="flex justify-around my-10 md:my-20 items-center gap-5">
        {cvs.map((cv) => (
          <div className="flex flex-col items-center gap-5 md:gap-10">
            <div className='flex flex-col md:flex-row gap-3'>
              <h1 className="font-semibold text-xl md:text-3xl">{cv.stack[0]}</h1>
              <h1 className="font-semibold text-xl md:text-3xl">{cv.stack[1]}</h1>
            </div>
            <a
              href={cv.link}
              target="_blank"
              className="p-3 md:p-5 bg-green-600 w-30 md:w-40 rounded-full text-white-50
              hover:bg-white-50 hover:text-green-600 transition-all 
              duration-300 ease-in-out font-bold text-center
              hover:scale-105
              "
            >
              Resume
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
