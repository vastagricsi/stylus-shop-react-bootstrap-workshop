import React from 'react';
import Slider from "./Catalog/Slider";
import Categories from "./Catalog/Categories";
import FeaturedList from "./Catalog/FeaturedList";
import AnalogList from "./Catalog/AnalogList";

function Home(props) {
    return (
        <div>
            <Slider/>
            <hr/>
            <Categories/>
            <hr/>
            <FeaturedList/>
            <hr/>
            <AnalogList/>
        </div>
    );
}

export default Home;
