import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";

function Image({item}){
    return <div>{item.image}</div>
}

function ItemDetailPage(props) {
    const {id} = useParams();
    const [item, setItem] = useState([]);

    const fetch = () => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/items/${id}`
        })
            .then(response => setItem(response.data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div>
            <Image item={item}/>
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
        </div>
    );
}

export default ItemDetailPage;
