import React from 'react';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";

function CategoryCard({data}) {
    return (
        <Card>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title><Link to={`/categories/${data.title}`}>{data.title}</Link></Card.Title>
            </Card.Body>
        </Card>
    );
}

export default CategoryCard;
