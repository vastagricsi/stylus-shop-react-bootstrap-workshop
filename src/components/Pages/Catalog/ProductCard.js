import React from 'react';
import {Card} from "react-bootstrap";

function ProductCard({data}) {
    return (
        <Card>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.title}{data.summary}</Card.Title>
                <Card.Text>
                    {data.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
