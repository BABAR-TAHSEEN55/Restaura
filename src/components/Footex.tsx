import { SOCIAL_MEDIA_LINKS } from "../constants/constants.tsx";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center gap-8 text-white">
        {SOCIAL_MEDIA_LINKS.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_bland"
            rel=" noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        All rights Reserved
      </p>
    </div>
  );
};

export default Footer;
//Naming the file as .tsx as Jsx Components are being used like <FaFacebook/> etc
