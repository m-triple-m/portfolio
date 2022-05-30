import { Card, Button, CardContent, CircularProgress, CardMedia } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../config";
import { PortfolioContext } from "../portfolioContext";


const PortfolioDetail = props => {

    const url = app_config.api_url;

    return (
        <Card>
            <CardMedia image={url + props.portfolioData.heroimage} style={{ height: '18rem' }}>

            </CardMedia>
            <CardContent>
                <h3>{props.portfolioData.fullname}</h3>
                {/* <p className="text-muted">{props.portfolioData.fullname}</p> */}
                <p className="">{props.portfolioData.description}</p>

                <Button component={Link} to={'/viewportfolio/' + props.portfolioData._id} variant="contained" className="mt-2" color="primary">View </Button>
            </CardContent>
        </Card>
    )
}


const ListPortfolio = () => {

    const url = app_config.api_url;

    const [portfolioList, setPortfolioList, loading, setLoading] = useContext(PortfolioContext);

    useEffect(() => {
        fetch(url + 'portfolio/getall')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPortfolioList(data);
                setLoading(false);
            })
    }, [])


    const showPortfolioList = () => {
        if (loading) {
            return <CircularProgress color="primary" />
        } else {
            return <div className="row">
                {
                    portfolioList.map((portfolio) => {
                        return (
                            <div className="col-md-3">
                                <PortfolioDetail portfolioData={portfolio} key={portfolio._id}></PortfolioDetail>
                            </div>
                        )
                    })
                }
            </div>
        }

    }

    return (
        <div className="container-fluid">
            <section className="" id="browse portfolio">

                <h2 className="text-center mt-4">List of Added Portfolios</h2>
                <hr />

                {showPortfolioList()}
            </section>
        </div>
    )
}

export default ListPortfolio;