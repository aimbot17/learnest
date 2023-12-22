import {
  CaretDown,
  UserCircle,
  CaretRight,
  UserCircleGear,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import Logo from "../assets/images/apnacollege.png";

type DropdownItem = {
  index: number;
  name: string;
  icon?: JSX.Element;
};

type FooterComponent = {
  index: number;
  img?: string;
  text?: string;
  name?: string;
  subtext?: DropdownItem[];
};

type NavComponent = {
  index: number;
  img?: string;
  name?: string;
  icon?: JSX.Element;
  routes?: string;
  dropdownItems?: string[];
};

export const Ncomponents: NavComponent[] = [
  {
    index: 0,
    img: Logo,
    routes: "",
  },
  {
    index: 1,
    name: "Home",
    routes: "Home",
  },
  {
    index: 2,
    name: "Courses",
    icon: <CaretDown size={13} />,
    routes: "course",
    dropdownItems: ["Course 1", "Course 2", "Course 3"],
  },
  {
    index: 3,
    name: "Resources",
    routes: "resources",
    icon: <CaretDown size={13} />,
    dropdownItems: ["Course 1", "Course 2", "Course 3"],
  },
  {
    index: 4,
    routes: "mybatch",
    name: "My Batch",
  },
  {
    index: 5,
    name: "Profile",
    routes: "profile",
    icon: <UserCircle size={30} />,
  },
];

export const Fcomponents: FooterComponent[] = [
  {
    index: 1,
    img: Logo,
    text: "We are India's Most Loved Coding Community. Join us! ",
  },
  {
    index: 2,
    name: "HELPFUL LINKS",
    subtext: [
      {
        index: 1,
        name: "Courses",
        icon: <CaretRight size={20} />,
      },
      {
        index: 2,
        name: "Privacy Policy",
        icon: <CaretRight size={20} />,
      },
      {
        index: 3,
        name: "REFUND & CANCELLATION POLICY",
        icon: <CaretRight size={20} />,
      },
      {
        index: 4,
        name: "TERMS & CONDITIONS",
        icon: <CaretRight size={20} />,
      },
    ],
  },
  {
    index: 3,
    name: "GET IN TOUCH",
    subtext: [
      {
        index: 1,
        name: "Courses",
        icon: <EnvelopeSimple size={20} />,
      },
      {
        index: 2,
        name: "Courses",
        icon: <EnvelopeSimple size={20} />,
      },
      {
        index: 3,
        name: "Courses",
        icon: <UserCircleGear size={20} />,
      },
    ],
  },
  {
    index: 4,
    name: "CONTACT WITH US",
    subtext: [
      {
        index: 1,
        name: "Facebook",
        icon: <FacebookLogo size={20} />,
      },
      {
        index: 2,
        name: "Instagram",
        icon: <InstagramLogo size={20} />,
      },
      {
        index: 3,
        name: "Twitter",
        icon: <TwitterLogo size={20} />,
      },
      {
        index: 4,
        name: "Youtube",
        icon: <YoutubeLogo size={20} />,
      },
      {
        index: 5,
        name: "LinkedIn",
        icon: <LinkedinLogo size={20} />,
      },
    ],
  },
];
