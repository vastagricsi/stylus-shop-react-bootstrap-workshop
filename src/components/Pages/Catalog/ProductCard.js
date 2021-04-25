import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function ProductCard({data}) {
    return (
        <Card>
            <Link to={`/product/${data.id}`}>
                <Card.Img variant="top" src={data.image}/>
                <Card.Body>
                    <Card.Title>{data.title}{data.summary}</Card.Title>
                    <Card.Text>
                        {data.price}
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    );
}

export default ProductCard;
