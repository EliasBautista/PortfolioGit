import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Services.css";
import soft from "../../../src/img/Testimonial/soft.png";
import pm from "../../../src/img/Testimonial/pm.png";
import ds from "../../../src/img/Testimonial/ds.png";
import shape from "../../../src/img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 9000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Services"}
        subHeading={"Let me help you"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-circle" />
                      Keeping data visible, transparent, trusted and accessible is a
                      critical step in building an intelligent data supply.
                    </p>
                    <hr/>
                  </div>
                  <div className="client-info">
                    <img src={ds} alt="no internet connection"></img>
                    <h5>Data Management</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-circle" />
                      On time, on budget, on point. I help you drive quality and 
                      predictability in a volatile, fast-paced world.
                    </p>
                    <hr/>
                  </div>
                  <div className="client-info">
                    <img src={pm} alt="no internet connection"></img>
                    <h5>Program, project and service management</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-circle" />
                      I'm hyper-focused on custom and cloud native development 
                      to create bespoke systems and experiences.
                    </p>
                    <hr/>
                  </div>
                  <div className="client-info">
                    <img src={soft} alt="no internet connection"></img>
                    <h5>Custom software engineering</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-circle" />
                      It's not a method; it's a mindset. Become a truly Agile business, 
                      from the board room to the back end.
                    </p>
                    <hr/>
                  </div>
                  <div className="client-info">
                    <img src={pm} alt="no internet connection"></img>
                    <h5>Agile transformation</h5>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
