import React from "react";
import { Link } from "react-router-dom";

export const Acceuil = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div
            className="carousel-item active py-5 row"
            style={{ backgroundColor: "#4eb7b0" }}
          >
            <div className="d-md-inline-block my-5 col-md-6">
              <img
                src="./images/carousel1.jpg"
                className="w-100"
                alt="First slide"
              />
            </div>
            <div className="d-md-inline-block my-5 col-md-5 px-4 px-md-0">
              <h1 className="title1 animated bounceInRight text-center font-weight-bold text-white unclickable">
                Feeling bad?
              </h1>
              <h3 className="title2 animated bounceInLeft text-center text-white unclickable">
                If you feel symptoms, use our health diagnostic system to check
                your current status
              </h3>
              <Link
                to="/diagnostic"
                role="button"
                className="title3 animated bounceIn btn btn-lg btn-block btn-outline-light button-diag"
              >
                Go to diagnostic
              </Link>
            </div>
          </div>

          <div
            className="carousel-item  py-5 row"
            style={{ backgroundColor: "#0a68a5" }}
          >
            <div className="d-md-inline-block my-5 col-md-6">
              <img
                src="./images/carousel2.jpg"
                style={{ width: "100%" }}
                alt="Second slide"
              />
            </div>
            <div className="d-md-inline-block my-5 col-md-5 px-4 px-md-0">
              <div className="">
                <h1 className="title1 animated flipInY text-center font-weight-bold text-white unclickable">
                  How it works!
                </h1>
                <h3 className="title2 animated flipInX text-center text-white unclickable">
                  We use an intelligent API that tells you what possible
                  diseases you may have
                </h3>
                <Link
                  to="/diagnostic"
                  role="button"
                  className="title3 animated zoomIn btn btn-lg btn-block btn-outline-warning button-diag"
                >
                  Go to diagnostic
                </Link>
              </div>
            </div>
          </div>

          <div
            className="carousel-item  py-5 row"
            style={{ backgroundColor: "#51203e" }}
          >
            <div className="d-md-inline-block my-5 col-md-6">
              <img
                src="./images/carousel3.jpg"
                style={{ width: "100%" }}
                alt="Third slide"
              />
            </div>
            <div className="d-md-inline-block my-5 col-md-5 px-4 px-md-0">
              <div className="">
                <h1 className="title1 animated fadeInLeft text-center font-weight-bold text-white unclickable">
                  Stay safe!
                </h1>
                <h3 className="title2 animated fadeInRight text-center text-white unclickable">
                  protect yourself and your family, stay home if you are ill or
                  call a doctor
                </h3>
                <Link
                  to="/diagnostic"
                  role="button"
                  className="title3 animated fadeInDown btn btn-lg btn-block btn-outline-info button-diag"
                >
                  Go to diagnostic
                </Link>
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="parallax row">
        <div className="parallax-shade col-md-12">
          <h1 className="text-center font-weight-bold text-white unclickable getting-started">
            Getting Started
          </h1>
        </div>
      </div>

      <div className="row" style={{ backgroundColor: "#cbd2da" }}>
        <div className="col-md-1"></div>
        <div className="col-md-4 py-5">
          <h1 className="display-3 px-4 px-md-0">Introduction</h1>
          <p className="text-justify font-akber px-4 px-md-0">
            We provide you a symptom checker system that helps you protect
            yourself. If you are not feeling well or having a potential illness,
            you can fill the diagnostic form with your informations.
          </p>
        </div>
        <div className="col-md-7 text-center">
          <img src="./images/ill.jpg" className="w-75" alt="Erreur" />
        </div>
      </div>

      <div className="row py-5" style={{ backgroundColor: "white" }}>
        <div className="col-md-6 text-center">
          <img src="./images/doc.jpg" className="w-50" alt="Erreur" />
        </div>
        <div className="col-md-4">
          <p className="text-justify font-akber px-4 px-md-0 my-5">
            Once you enter the symptoms you have in the interface, or API will
            do the math and it will tell you if you're suffering from a possible
            disease. The results may not be 100% correct but you can rely on it
            most of the time!
          </p>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className="row" style={{ backgroundColor: "#efd5d6" }}>
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <div className="mx-4">
            <Link
              to="/diagnostic"
              role="button"
              className="btn btn-lg btn-block btn-warning vertical-mid btn-start-now-box"
            >
              <h1 className="btn-start-now">Start Now!</h1>
            </Link>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src="./images/heart.jpg" className="w-75" alt="Erreur" />
        </div>
      </div>

      <div className="row" style={{ backgroundColor: "white" }}>
        <div className="col-md-6 text-center">
          <img src="./images/shield.jpg" className="w-50" alt="Erreur" />
        </div>
        <div className="col-md-4 py-5">
          <h1 className="display-3  px-4 px-md-0">Thank you!</h1>
          <p className="text-justify font-akber px-4 px-md-0">
            We are regulary enhancing our system with new insights. We thank you
            for your trust!
          </p>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};
