import React, {useEffect, useState} from 'react';
import axios from "axios";
import CategoryCard from "./CategoryCard";

function Categories(props) {
    const [categories, set_category_list] = useState([]);

    const fetch = () => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/categories`
        })
            .then(response => set_category_list(response.data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetch();
    }, []);
    return (
        <div>
            <h4>Categories</h4>
            <div className="row">
            {
                categories.map(data => {
                    //todo filter by category name
                    //todo consider subcategory if any
                    return <div className="col-3"><CategoryCard data={data}/></div>
                })
            }
            </div>
        </div>
    );
}

export default Categories;
