import React from "react";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.images = 
      {
        imagesEnSierrasChicas: 
          {
            image1:
              "https://camo.githubusercontent.com/873a57da19d6f585bd26a207a27e60033fdbe0967b48d54c7f9254df855e868c/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f49733664707644575f432d596a547878726471314b654b624c545943316f5435544d4c334f58485468723272326a545963696c787237565834626e6e4e5541644975733d77313533362d683732362d7277",
            image2:
              "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",          
            image3:
              "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
          },

        imagesKieroKuentos: 
          {
            image1:
              "https://camo.githubusercontent.com/09838c503ae6cc81d6fc1749476b02844f5aa327826916f8226a272c54ba5e9d/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f666c5539374c61514c4269444342476f58574243366339575945305f316b646a74324c7364683968396b62626331585677565678714f79576438516f415036526c6b513d77313533362d683732362d7277",
            image2:
              "https://camo.githubusercontent.com/5d1547bb3fd36db0696346623e5d505b50426791f7629614a66926f4bc003fcd/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f684234626b34427239583166555f67383257324a5a7a39744d6c5441554f5a5f72475f4a45774e73413431575933746667676d446a36587038494e38577470766f5f413d77313533362d683535382d7277",          
            image3:
              "https://github.com/marcosicp/kierokuentosapp/blob/master/assets/screenshots/Captura.PNG",
              image4:"https://github.com/marcosicp/kierokuentosapp/blob/master/assets/screenshots/screenshotkk.PNG"
          },

        imagesClinker: 
          {
            image1:
              "https://github.com/marcosicp/clinker-web/raw/master/public/views/images/clinker%20screenshot.PNG",
            image2:
              "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",          
            image3:
              "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
          },

        imagesCyclearApp: 
          {
            image1:
              "https://camo.githubusercontent.com/873a57da19d6f585bd26a207a27e60033fdbe0967b48d54c7f9254df855e868c/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f49733664707644575f432d596a547878726471314b654b624c545943316f5435544d4c334f58485468723272326a545963696c787237565834626e6e4e5541644975733d77313533362d683732362d7277",
            image2:
              "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",          
            image3:
              "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
          },

        imagesRugbyApp: 
          {
            image1:
              "https://github.com/marcosicp/rugbynewsapp/raw/master/assets/screenshots/Captura2.PNG",
            image2:
              "https://github.com/marcosicp/rugbynewsapp/raw/master/assets/screenshots/Captura.PNG",          
            image3:
              "https://github.com/marcosicp/rugbynewsapp/raw/master/assets/screenshots/Captura3.PNG",
          },

          imagesPosSales: 
          {
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
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Check some of the projects I have been working on
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href={this.images.imagesEnSierrasChicas.image1}
                  data-lightbox="gallery-vmarine"
                >
                  <div className="work-img">
                    <img
                      src={this.images.imagesEnSierrasChicas.image1}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">EnSierrasChicas</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Flutter Firebase Firestore SonarQube
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={this.images.imagesEnSierrasChicas.image1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
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
                <a
                  href={this.images.imagesEnSierrasChicas.image4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={this.images.imagesEnSierrasChicas.image5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={this.images.imagesKieroKuentos.image1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={this.images.imagesKieroKuentos.image1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">KieroKuentos</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Flutter Firebase Firestore StreamVideo
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={this.images.imagesKieroKuentos.image1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
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
                <a
                  href={this.images.imagesKieroKuentos.image5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="work-box">
                <a href={this.images.imagesRugbyApp.image1} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={this.images.imagesRugbyApp.image1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Rugby Club App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Flutter Firebase FireStore
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
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
                {/* <a
                  href={stock3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={this.images.imagesClinker.image1} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={this.images.imagesClinker.image1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Cyclear</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap JS
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
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
                {/* <a
                  href={stock2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={this.images.imagesPosSales.image1} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={this.images.imagesPosSales.image1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Pos Sale Angular</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Angular PWA MongoDB C# NetCore Docker</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={this.images.imagesPosSales.image1}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
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
                {/* <a
                  href={stock4}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap MERN
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
