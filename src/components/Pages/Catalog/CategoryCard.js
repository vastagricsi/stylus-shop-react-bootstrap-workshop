import React from 'react';
import {Link} from "react-router-dom";

function CategoryCard({data}) {
    return (
        <Link to={`/categories/${data.title}`}>{data.title}</Link>
    );
}

export default CategoryCard;
