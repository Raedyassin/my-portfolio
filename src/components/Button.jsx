
export default function Button({ className, text, id }) {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("projects");
        if (target && id) {
          const offest = window.innerHeight * 0.2;
          // const top = target.offsetTop - offest;
          const top = target.getBoundingClientRect().top + window.scrollY - offest;
          window.scrollTo({
            top: top,
            behavior: "smooth",
          });
        }
      }}
      className={`${className || ""} cta-wrapper z-500 `}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text font-semibold mr-2"> {text} </p>
        <div className="arrow-wrapper">
          <img src="images/arrow-down.svg" alt="arrow"  />
        </div>
      </div>
    </a>
  );
}
