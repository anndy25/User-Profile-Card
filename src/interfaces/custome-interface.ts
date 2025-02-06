import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
    faGithub,
    faInstagram,
    faLine,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export interface IProfileCard {
    name: string;
    avatar: string;
    bio: string;
    socialMediaLinks: {
        icon: IconProp;
        url: string;
        color: string;
    }[];
}

export const SocialMediaIcon = {
    GITHUB: faGithub,
    LINKEDIN: faLinkedin,
    INSTAGRAM: faInstagram,
    OTHER: faLine,
};

export enum SocialMediaIconColor {
    GITHUB = "#000000",
    LINKEDIN = "#0077B5",
    INSTAGRAM = "#E4405F",
    LINE = "#00C300",
}
