import React from "react";
import imageOverlay from "../img/earth.jpg";
import pdf from '../Marcos_Casor_UPD.pdf'
import soIcon from "../img/stack-overflow.png";


class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Download CV</h5>
                      </div>
                      <div>
                        <a
                          className="btn btn-primary btn js-scroll px-4"
                          href={pdf} target="_blank"
                        >
                          PDF
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>

                      <div className="socials" style={{ paddingTop: "0px" }}>
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/marcos.casor"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-facebook"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/marcosicp"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://stackoverflow.com/users/1518978"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <img
                                  align="center"
                                  className="imgSO"
                                  src={soIcon}
                                  alt="stackoverflow"
                                  height="25"
                                  width="25"
                                  data-canonical-src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg"
                                />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/marcos-casor-pressacco-086ab321/?locale=en_US"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/marcos.casor"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="mailto: marcos.casor@gmail.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-email"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box"></div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
