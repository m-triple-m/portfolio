import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../config";
import "./viewport.css";
import personal from "../images/personal.png";
import qualification from "../images/qualification.png";
import experience from "../images/experience.png";
import contact from "../images/contact.png";

const ViewPortfolio = () => {
  const { id } = useParams();
  const url = app_config.api_url;
  const [PortfolioData, setPortfolioData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    fetch(url + "portfolio/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPortfolioData(data);
        setLoading(false);
      });
  }, []);

  const showPortfolio = () => {
    if (loading) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="portview">
          <Container
            style={{
              background: "white",
              boxShadow:
                "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
            }}
          >
            <Grid container>
              <Grid item md={6} style={{ marginTop: "auto", padding: "5rem" }}>
                <h1 className="heroname">{PortfolioData.fullname}</h1>
                <p className="desc">{PortfolioData.description}</p>
              </Grid>

              <Grid item md={4}>
                <img
                  className="img-fluid"
                  src={url + "/" + PortfolioData.heroimage}
                  alt=""
                />
              </Grid>
            </Grid>
            <hr />
            <section className="personal container">
              <h1 className="section-title">Personal Details</h1>
              <Grid container>
                <Grid item md={4}>
                  <img className="img-fluid" src={personal} alt="" />
                </Grid>
                <Grid item md={4} style={{ padding: "5rem" }}>
                  <p className="detail">{PortfolioData.personaldetails}</p>
                </Grid>
              </Grid>
            </section>

            <hr />
            <section className="qual container">
              <h1 className="section-title">Qualifications</h1>
              <Grid container>
                <Grid item md={4}>
                  <img className="img-fluid" src={qualification} alt="" />
                </Grid>
                <Grid item md={4} style={{ padding: "5rem" }}>
                  <p className="detail">{PortfolioData.qualification}</p>
                </Grid>
              </Grid>
            </section>
            <hr />
            <section className="experience container">
              <h1 className="section-title">Experience</h1>
              <Grid container>
                <Grid item md={4}>
                  <img className="img-fluid" src={experience} alt="" />
                </Grid>
                <Grid item md={4} style={{ padding: "5rem" }}>
                  <p className="detail">{PortfolioData.experience}</p>
                </Grid>
              </Grid>
            </section>
            <hr />
            <section className="contact container">
              <h1 className="section-title">Contact Details</h1>
              <Grid container>
                <Grid item md={4}>
                  <img className="img-fluid" src={contact} alt="" />
                </Grid>
                <Grid item md={4} style={{ padding: "5rem" }}>
                  <p className="detail">{PortfolioData.contact}</p>
                </Grid>
              </Grid>
            </section>
          </Container>
        </div>
      );
    }
  };

  return <div>{showPortfolio()}</div>;
};

export default ViewPortfolio;
