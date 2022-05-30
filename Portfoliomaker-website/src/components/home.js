import "../stylesheets/home.css";
import CreatePort from "../components/createport";
import React, { useState } from "react";

const Home = () => {
  const [createportOpen, setOpenCreatePort] = useState(false);

  return (
    <div class="PrismicHeroCarouselCard-image-container">
      {/* <img alt="" srcset="https://mir-s3-cdn-cf.behance.net/project_modules/1400/8df0b627235079.56361c6431ede.jpg" class="imag"/> */}
      <h1 className="dev">
        Hello <h2 className="color"> Developers!</h2>
      </h1>
      <p className="para">
        This is our Portfolio maker website.Fast.Easy.Effective.
        <p className="para">
          Creating an impressive portfolio is not easy. If you need a spark to
          ignite your creativity, here are 24 of the best web developer
          portfolio websites.
          <p className="para">
            One of the toughest tasks of a new developer is to make a personal
            web developer portfolio that helps get a potential employer’s
            attention in the overcrowded job marketplace. Undoubtedly, an
            awesome online portfolio not only showcases your design works, but
            it also highlights your accomplishments and expertise, leaving a
            strong impression on your visitors.
          </p>
        </p>
      </p>
      {/* <a href="https://bootstrapmade.com/bootstrap-portfolio-templates/" title="Create Your Portfolio Now" rel="nofollow" class="button button--big button--red mt-35--phone mt-50--tablet" className="btn btn-success">Get Started</a> */}
      {/* { <button type="button" class="btn btn-success" >Get Started</button> } */}
      <button
        href=""
        className="openCreatePort"
        onClick={() => {
          setOpenCreatePort(true);
        }}
      >
        Get Started
      </button>
      {createportOpen && <CreatePort setCreatePortOpen={setOpenCreatePort} />}

      <img
        className="iim"
        src="https://raw.githubusercontent.com/akashyap2013/PortFolio_Website/master/img/banner/banner-image.png"
      />
      <div class="">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://i.pinimg.com/564x/ed/4d/b1/ed4db143e0b0bb9de507b144a79971e1.jpg"
              class="img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Fast. Easy. Effective.</h5>
              <h1 class="jumbotron__title">
                Portfoliomaker. The Best Portfolio Builder Online.
              </h1>
              <p class="card-text">
                Writing a Portfolio is a daunting task: stressful, confusing,
                and takes too much time. But not anymore — Let Portfoliomaker
                lead the way.
              </p>
              {/* <a href="https://kllr-themes.design/demos/scrn/demos/index-2.html" title="Create Your Portfolio Now" rel="nofollow" class="button button--big button--red mt-35--phone mt-50--tablet" className="btnn">Create Your Portfolio Now</a> */}
            </div>
          </div>
          <div class="grid__row resume-builder__two-columns mb-80--phone mb-100--desktop">
            <div class="grid__column--desktop--5 grid__column--tablet--12 grid__column--phone--4">
              <h2 class="text">
                Build a Portfolio that gets&nbsp;you&nbsp;hired—
              </h2>
              <p class="textt">
                You’re a lot of things. But you don’t have to be a portfolio
                writer. Don’t let your portfolio hold you back. With the
                Portfolio maker editor, you’ll create a document that gives you
                the confidence you deserve:
              </p>
            </div>

            {/* <a href="https://bootstrapmade.com/bootstrap-portfolio-templates/" title="Create Your Portfolio Now" rel="nofollow" class="button button--big button--red mt-35--phone mt-50--tablet" className="link">See more templates</a> */}

            <div class="grid__column--desktop--6 grid__column--offset--desktop-1 grid__column--tablet--12 grid__column--phone--4 text--center">
              <div class="resume-builder__image-wrapper resume-builder__two-columns--image1 mb-24--phone">
                <img
                  className="images"
                  src="https://d2zav2bjdlctd5.cloudfront.net/uploads/2018/03/minimus_fet1.jpg"
                  alt="Build a resume that gets you hired."
                />
              </div>
            </div>
          </div>
          {/* <header><h2 class="page-title">What do our users say about Portfoliomaker?</h2><p class="page-intro">They all found their dream job, thanks to Portfoliomaker:</p></header> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
