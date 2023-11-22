import s from "./HomeTestimonialSection.module.scss";
import testimonial1 from "@/assets/images/testimonial1.webp";
import testimonial2 from "@/assets/images/testimonial2.webp";
const HomeTestimonialSection = () => {
  return (
    <section className={s._Wrapper}>
      <div className={s._Container}>
        <div className="container">
          <div className={s._Content}>
            <div className={s._TextContent}>
              <h2 className="h4">Testimonials</h2>
              <h4 className="white display-2">What people think about HenriPay</h4>
            </div>
            <div className={s._Testimonials}>
              <div className={s._Testimonial}>
                <div className={s._Header}>
                  <div className={s._Avatar}>
                    <img src={testimonial1} alt="Testimonial 1" width="48px" height="48px" />
                  </div>
                  <div className={s._Info}>
                    <h5 className="white heading-1">Jess Muntenaar</h5>
                    <p className="white">Rembrandt</p>
                  </div>
                </div>
                <p className="white">
                  HenriPay is my go-to service provider; over the last few months, they haven't failed at their service delivery one time. I occasionally use them to purchase or sell NFTs; I highly recommend HenriPay. Great job, HenriPay!
                </p>
                <div className={s._Footer}>7:47 PM</div>
              </div>
              <div className={s._Testimonial}>
                <div className={s._Header}>
                  <div className={s._Avatar}>
                    <img src={testimonial2} alt="Testimonial 2" width="48px" height="48px" />
                  </div>
                  <div className={s._Info}>
                    <h5 className="white heading-1">Danny Coppenrath</h5>
                    <p className="white">MentorCalls</p>
                  </div>
                </div>
                <p className="white">
                  HenriPay made it possible for us to target traditional consumers that have no cryptocurrencies or wallets. This gave us access to a much broader market of buyers and helped us a lot in selling our NFT collection.
                </p>
                <div className={s._Footer}>7:47 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialSection;
