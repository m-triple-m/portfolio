import { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = props => {

    const [portfolioList, setPortfolioList] = useState([]);
    const [loading, setLoading] = useState(true);

    return <PortfolioContext.Provider value = {
            [portfolioList, setPortfolioList, loading, setLoading] } > { props.children } </PortfolioContext.Provider>

}