import React, {useEffect, useState} from 'react';
import axios from "axios";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";

function ItemListPage(props) {
    const [items, setItems] = useState([]);

    const fetch = () => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/items`
        })
            .then(response => setItems(response.data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetch();
    }, []);
    return (
        <div>
            <div>
                <h4>category name should go here</h4>
                <div className="row">
                    {
                        items.map(data => <div className="col-3"><ProductCard data={data}/></div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemListPage;
