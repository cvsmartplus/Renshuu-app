// utils/socialIcons.js
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";

export const socialMediaMap = {
    github: { icon: FaGithub },
    linkedin: { icon: FaLinkedin },
    twitter: { icon: FaTwitter },
    instagram: { icon: FaInstagram },
    facebook: { icon: FaFacebook },
};

export const getSocialIcon = (key) => {
    return socialMediaMap[key]?.icon || FaGlobe;
};
