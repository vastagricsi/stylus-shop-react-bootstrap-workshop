import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from "./ProductCard";

function FeaturedList(props) {
    const [featuredList, setFeaturedList] = useState([]);

    const fetch = () => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/featured`
        })
            .then(response => setFeaturedList(response.data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div>
            <h4>Featured</h4>
            <div className="row">
            {
                featuredList.map(data => <div className="col-3"><ProductCard data={data}/></div>)
            }
            </div>
        </div>
    );
}

export default FeaturedList;
