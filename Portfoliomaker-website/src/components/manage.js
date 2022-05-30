import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import app_config from "../config";
import UpdatePort from "./update";

const ManagePortfolio = () => {
  const url = app_config.api_url;

  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const fetchData = () => {
    fetch(url + "portfolio/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPortfolioData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    fetch(url + "portfolio/delete/" + id, { method: "DELETE" }).then((res) => {
      console.log(res.status);
      fetchData();
    });
  };

  const updateData = (form) => {
    setShowForm(true);
    setFormData(form);
  };

  const displayUpdateForm = () => {
    if (showForm) {
      return <UpdatePort formdata={formData}></UpdatePort>;
    }
  };

  const displayPortfolios = () => {
    if (!loading) {
      return portfolioData.map((portfolio) => (
        <tr>
          <td>{portfolio.fullname}</td>
          <td>{new Date(portfolio.created).toLocaleDateString()}</td>
          <td>
            <button
              onClick={(e) => deleteData(portfolio._id)}
              className="btn btn-danger"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
          <td>
            <button className="btn btn-primary" onClick={updateData}>
              <i class="fas fa-pen"></i>
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <Container>
      <h1 className="text-center">Manage Your Portfolios</h1>
      <hr />

      <table className="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Created on</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayPortfolios()}</tbody>
      </table>
      <div className="mt-5">{displayUpdateForm()}</div>
    </Container>
  );
};

export default ManagePortfolio;
