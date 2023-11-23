import clsx from "clsx";
import Maze from "@/components/atoms/Svgs/Maze";
import s from "./HomeHowItWorks.module.scss";
import Bedge from "@/components/atoms/Bedge/Bedge";
import MazeSigns from "@/components/atoms/Svgs/MazeSigns";
import IcVersus from "@/components/atoms/Icons/IcVersus";
import WithHenriPay from "@/components/atoms/Svgs/WithHenriPay";
import Button from "@/components/atoms/Button/Button";


const HomeHowItWorksSection = () => {
  return (
    <section className={s._Wrapper} id="how-it-works">
      <span className={s._LeftCircle}></span>
      <span className={s._RightCircle}></span>
      <div className={clsx(s._Container, "container")}>
        <h4>How it works</h4>
        <h3 className="display-2 white">
          The easiest way to sell <br />
          your NFTs in web3
        </h3>
        <p className="body-1 white">
          Knowing that Web3 is the future of the internet, we have designed HenriPay to "stand the future." We deliver the seamless, responsive, and fastest payment processing you have ever seen through a decentralized network. Even better,
          we receive payment in local currencies, coins, and any recognized payment option in the marketplace.
        </p>
        <div className={s._Comparation}>
          <div className={s._WithoutHenriPay}>
            <Bedge variant="red" className={s._Bedge}>
              Without Henripay
            </Bedge>
            <div className={s._Maze}>
              <Maze />
              <MazeSigns />
            </div>
          </div>
          <div className={s._Versus}>
            <IcVersus />
          </div>
          <div className={s._WithHenriPay}>
            <Bedge variant="green" className={s._Bedge}>
              With HenriPay
            </Bedge>
            <WithHenriPay />
          </div>
        </div>
        <div className={s._Integrate}>
          <h2 className="white">
            Tap into the 99% of your potential customers <br />
            that you are currently missing out on.
          </h2>
          <Button>Integrate HenriPay</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorksSection;
