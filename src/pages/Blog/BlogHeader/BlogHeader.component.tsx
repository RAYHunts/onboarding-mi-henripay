import { Link } from "react-router-dom";
import s from "./BlogHeader.module.scss";
import IcInstagram from "@/components/atoms/Icons/IcInstagram";
import IcTwitter from "@/components/atoms/Icons/IcTwitter";
import IcLinkedIn from "@/components/atoms/Icons/IcLinkedIn";
import clsx from "clsx";

const BlogHeader = () => {
  return (
    <header className={clsx(s._Wrapper, "container")}>
      <div className={s._TextContent}>
        <h1 className="white display-1">
          <span className="secondary">Blogs & News </span>
          about NFTs
        </h1>
        <h2 className="white subheading-1">NFT news to stay up to date about what is going on in the web3 world. Stay informed and enjoy reading blogs about web3</h2>
        <div className={s._Socials}>
          <h3 className="white subheading-1">Follow</h3>
          <div className={s._Icons}>
            <Link to="/">
              <IcInstagram />
            </Link>
            <Link to="/">
              <IcTwitter />
            </Link>
            <Link to="/">
              <IcLinkedIn />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
