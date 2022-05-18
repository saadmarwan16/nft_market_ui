import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <p className="text-lg font-semibold text-center text-white">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/saadmarwan16"
          target="_blank"
          rel="noreferrer"
          className="text-accent hover:text-accent-focus"
        >
          Marwan
        </a>
      </p>
      <p className="text-center">
        Design inspired by{" "}
        <a
          href="https://dribbble.com/shots/18224196-NFT-Market-Arts-UX-UI"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-accent hover:text-accent-focus"
        >
          IKAKO
        </a>
      </p>
    </div>
  );
};

export default Footer;
