import Logo from "../assets/images/apnacollege.png";
import {
  CaretRight,
  UserCircleGear,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";

const Footer = () => {
  return (
    <div
      className={"flex items-center justify-center p-10 mt-7 bg-white w-full"}
    >
      <div className={"flex items-center justify-around gap-10"}>
        <div className="text-base flex flex-col items-start justify-center gap-5 w-52 h-56">
          <div>
            <img src={Logo} alt={"Logo"} className="h-12" />
          </div>
          <div className="text-lg">
            {"We are India's most loved coding community. Join us!"}
          </div>
        </div>
        <div
          className={"w-52 h-56 flex flex-col items-start justify-start gap-2"}
        >
          <div className="text-black font-bold text-lg mt-5">HELPFUL LINKS</div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <CaretRight />
            </div>
            <div>Courses</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <CaretRight />
            </div>
            <div>Courses</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <CaretRight />
            </div>
            <div>Courses</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <CaretRight />
            </div>
            <div>Courses</div>
          </div>
        </div>
        <div
          className={"w-52 h-56 flex flex-col items-start justify-start gap-2"}
        >
          <div className="text-black font-bold text-lg mt-5">GET IN TOUCH</div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <EnvelopeSimple />
            </div>
            <div>Courses</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <EnvelopeSimple />
            </div>
            <div>Courses</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <UserCircleGear />
            </div>
            <div>Courses</div>
          </div>
        </div>
        <div
          className={"w-52 h-56 flex flex-col items-start justify-start gap-2"}
        >
          <div className="text-black font-bold text-lg mt-5">
            CONNECT WITH US
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <FacebookLogo />
            </div>
            <div>Courses</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <InstagramLogo />
            </div>
            <div>Courses</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <TwitterLogo />
            </div>
            <div>Courses</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <YoutubeLogo />
            </div>
            <div>Courses</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
