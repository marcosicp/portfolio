import React from "react";
import qc1 from "../img/proyects/quierocuentos/KieroKuentos_GooglePlay1.png";
import qc2 from "../img/proyects/quierocuentos/KieroKuentos_GooglePlay2.png";
import qc3 from "../img/proyects/quierocuentos/KieroKuentos_GooglePlay3.png";
import qc4 from "../img/proyects/quierocuentos/KieroKuentos_GooglePlay4.png";

import cyc1 from "../img/proyects/cyclear/portada.PNG";
import cyc2 from "../img/proyects/cyclear/captura.png";
import cyc3 from "../img/proyects/cyclear/pdrs.PNG";
import cyc4 from "../img/proyects/cyclear/tienda.PNG";

import adminEns1 from "../img/proyects/ensierraschicasadmin/adminportada.PNG";
import adminEns2 from "../img/proyects/ensierraschicasadmin/admin1.PNG";

import ensHome from "../img/ens-home.png";


class Portfolio extends React.Component {
  constructor() {
    super();
    this.images = {
      imagesEnSierrasChicas: {
        image1:
        ensHome,
        image2:
          "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",
        image3:
          "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
      },

      imagesKieroKuentos: {
        image1: qc1,
        image2: qc2,
        image3: qc3,
        image4: qc4,
      },

      imagesClinker: {
        image1:
          "https://github.com/marcosicp/clinker-web/raw/master/public/views/images/clinker%20screenshot.PNG",
        image2:
          "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",
        image3:
          "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
      },

      imagesTopicka: {
        image1:
          "https://github.com/marcosicp/clinker-web/raw/master/public/views/images/clinker%20screenshot.PNG",
        image2:
          "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",
        image3:
          "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
      },

      imagesEscuelitaVerano: {
        image1:
          "https://github.com/marcosicp/clinker-web/raw/master/public/views/images/clinker%20screenshot.PNG",
        image2:
          "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",
        image3:
          "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
      },

      imagesIBIS: {
        image1:
          "https://github.com/marcosicp/clinker-web/raw/master/public/views/images/clinker%20screenshot.PNG",
        image2:
          "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",
        image3:
          "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
      },

      imagesCyclearApp: {
        image1: cyc1,
        image2: cyc2,
        image3: cyc3,
        image4: cyc4,
      },

      imagesAdminCyclear: {
        image1:
          "https://camo.githubusercontent.com/873a57da19d6f585bd26a207a27e60033fdbe0967b48d54c7f9254df855e868c/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f49733664707644575f432d596a547878726471314b654b624c545943316f5435544d4c334f58485468723272326a545963696c787237565834626e6e4e5541644975733d77313533362d683732362d7277",
        image2:
          "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",
        image3:
          "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
      },

      imagesAdminKieroKuentos: {
        image1:
          "https://camo.githubusercontent.com/873a57da19d6f585bd26a207a27e60033fdbe0967b48d54c7f9254df855e868c/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f49733664707644575f432d596a547878726471314b654b624c545943316f5435544d4c334f58485468723272326a545963696c787237565834626e6e4e5541644975733d77313533362d683732362d7277",
        image2:
          "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",
        image3:
          "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
      },

      imagesAdminEnSierrasChicas: {
        image1:
        adminEns1,
        image2:
        adminEns2
        
      },

      // imagesRugbyApp: {
      //   image1:
      //     "https://github.com/marcosicp/rugbynewsapp/raw/master/assets/screenshots/Captura2.PNG",
      //   image2:
      //     "https://github.com/marcosicp/rugbynewsapp/raw/master/assets/screenshots/Captura.PNG",
      //   image3:
      //     "https://github.com/marcosicp/rugbynewsapp/raw/master/assets/screenshots/Captura3.PNG",
      // },

      imagesPosSales: {
        image1:
          "https://github.com/marcosicp/pos-sales-angular/raw/master/src/assets/imagenes/screenshot.PNG",
        image2:
          "https://github.com/marcosicp/pos-sales-angular/raw/master/src/assets/imagenes/Captura2.PNG",
        image3:
          "https://github.com/marcosicp/pos-sales-angular/raw/master/src/assets/imagenes/Captura.PNG",
      },
    };
  }

  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row ">
            <div className="col-sm-12">
              <div className="title-box-2">
                <h5 className="title-left color-titles">Projects</h5>
                <p className="subtitle-a" style={{paddingTop: "5px"}}>
                  Check some of the projects I have been working on. Most of them created from scratch.
                </p>

              </div>
            </div>
          </div>
          <div className="row" >
            <div className="col-md-4" >
              <div className="work-box" >
                <a
                  href={this.images.imagesEnSierrasChicas.image1}
                  data-lightbox="gallery-vmarine"
                >
                  <div className="work-img" style={{height: "500px"}}>
                    <img
                      src={this.images.imagesEnSierrasChicas.image1}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">
                        <h2 className="w-title">EnSierrasChicas</h2>
                        <div className="w-more" style={{height: "120px"}}>
                          <span className="w-ctegory">
                            Stack: Flutter Firebase Firestore SonarQube.
                            <br />
                            Apps deployed to both Stores.
                            <br />
                            Web version deployed to Firebase Hosting
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="w-like">
                          <span className="ion-ios-eye-outline color-secondary"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href={this.images.imagesEnSierrasChicas.image2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={this.images.imagesEnSierrasChicas.image3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img" style={{height: "500px"}}>
                  <img
                    src={this.images.imagesKieroKuentos.image1}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-10">
                      <h2 className="w-title">KieroKuentos</h2>
                      <div className="w-more" style={{height: "120px"}}>
                        <span className="w-ctegory">
                          Stack: Flutter(Android, iOS and Web) Firebase
                          Firestore StreamVideo InApPurchases.
                          <br /> Apps deployed to both Stores.
                          <br /> Web version was deployed to Firebase Hosting.
                        </span>{" "}
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <a
                        href={this.images.imagesKieroKuentos.image1}
                        data-lightbox="gallery-aguadeluz"
                      >
                        <div className="w-like">
                          <span className="ion-ios-eye-outline color-secondary"></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={this.images.imagesKieroKuentos.image2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={this.images.imagesKieroKuentos.image3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={this.images.imagesKieroKuentos.image4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            {/* <div className="col-md-4">
              <div className="work-box">
                <a
                  href={this.images.imagesRugbyApp.image1}
                  data-lightbox="gallery-medlingos"
                >
                  <div className="work-img" style={{height: "500px"}}>
                    <img
                      src={this.images.imagesRugbyApp.image1}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">
                        <h2 className="w-title">Rugby Club App</h2>
                        <div className="w-more" style={{height: "120px"}}>
                          <span className="w-ctegory">
                            Stack: Flutter Firebase FireStore.
                            <br />
                            Android App uploaded to Google Play
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={this.images.imagesRugbyApp.image2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={this.images.imagesRugbyApp.image3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div> */}
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href={this.images.imagesClinker.image1}
                  data-lightbox="gallery-todo"
                >
                  <div className="work-img" style={{height: "150px"}}>
                    <img
                      src={this.images.imagesClinker.image1}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">
                        <h2 className="w-title">Clinker</h2>
                        <div className="w-more" style={{height: "120px"}}>
                          <span className="w-ctegory">
                            Stack: HTML5 CSS3 Bootstrap JS BitBucket.
                            <br />
                            Code deployed to Heroku servers.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={this.images.imagesClinker.image1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href={this.images.imagesPosSales.image1}
                  data-lightbox="gallery-smth"
                >
                  <div className="work-img" style={{height: "150px"}}>
                    <img
                      src={this.images.imagesPosSales.image1}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">
                        <h2 className="w-title">POS Sale Angular</h2>
                        <div className="w-more" style={{height: "120px"}}>
                          <span className="w-ctegory">
                            Stack: Angular PWA MongoDB C# NetCore Docker.
                            <br />
                            Code has been deployed to Heroku servers.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
               
                <a
                  href={this.images.imagesPosSales.image2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={this.images.imagesPosSales.image3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href={this.images.imagesCyclearApp.image1}
                  data-lightbox="gallery-smth"
                >
                  <div className="work-img" style={{height: "150px"}}>
                    <img
                      src={this.images.imagesCyclearApp.image1}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">
                        <h2 className="w-title">Cyclear</h2>
                        <div className="w-more" style={{height: "120px"}}>
                          <span className="w-ctegory">
                            Stack: React PWA MongoDB Firestore Cloudflare C# NetCore
                            Docker GitHub
                            <br />
                            Code has been deployed to Heroku servers.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href={this.images.imagesCyclearApp.image2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={this.images.imagesCyclearApp.image3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={this.images.imagesCyclearApp.image4}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>


            <div className="col-md-4">
              <div className="work-box">
                <a
                  href={this.images.imagesAdminEnSierrasChicas.image1}
                  data-lightbox="gallery-smth"
                >
                  <div className="work-img">
                    <img
                      src={this.images.imagesAdminEnSierrasChicas.image1}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">
                        <h2 className="w-title">Admin EnSierrasChicas</h2>
                        <div className="w-more" style={{height: "120px"}}>
                          <span className="w-ctegory">
                            Stack: Angular Firestore Cloud Functions GitHub
                            <br />
                            Code has been deployed to Firebase Hosting.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href={this.images.imagesAdminEnSierrasChicas.image2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={this.images.imagesAdminEnSierrasChicas.image3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
