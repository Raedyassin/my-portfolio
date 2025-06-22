import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials ">
        {socialImgs.map((socialImg, index) => (
          <a
            href={socialImg.link}
            key={index}
            target="_blank"
            className="icon p-2"
          >
            <img src={socialImg.imgPath} alt="social icon" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
